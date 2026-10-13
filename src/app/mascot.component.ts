import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';

// Angular port of page-mascot's <Mascot />: two 3x3 sprite sheets, swapped via background-position.
const DIRECTIONS = [
  'up-left', 'up', 'up-right',
  'left', 'center', 'right',
  'down-left', 'down', 'down-right',
] as const;

const REACTIONS = [
  'blink', 'heart', 'sparkle',
  'surprised', 'wink', 'bashful',
  'sleepy', 'dizzy', 'delighted',
] as const;

type Direction = (typeof DIRECTIONS)[number];
type Reaction = (typeof REACTIONS)[number];

// Clockwise from the right, matching atan2 with y pointing down.
const CLOCKWISE: Direction[] = [
  'right', 'down-right', 'down', 'down-left', 'left', 'up-left', 'up', 'up-right',
];
const SECTOR = (Math.PI * 2) / CLOCKWISE.length;
const HYSTERESIS = 0.12;
const DEAD_ZONE = 70;

const PAYOFFS: Reaction[] = ['heart', 'sparkle', 'delighted'];
const BOOP_PAYOFF = 120;
const BOOP_END = 560;
const SQUASH_MS = 420;
const DIZZY_AFTER = 4;
const DIZZY_WINDOW = 1600;
const DIZZY_END = 1100;

const SQUASH: Keyframe[] = [
  { transform: 'scale(1, 1)', easing: 'ease-in' },
  { transform: 'scale(1.10, 0.86)', offset: 0.18, easing: 'ease-out' },
  { transform: 'scale(0.95, 1.08)', offset: 0.45, easing: 'ease-in-out' },
  { transform: 'scale(1.03, 0.97)', offset: 0.72, easing: 'ease-in-out' },
  { transform: 'scale(1, 1)' },
];

// background-size 300% makes each cell a clean 0/50/100% step on both axes.
function cell(index: number): string {
  return `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%`;
}

function wrap(angle: number) {
  return Math.atan2(Math.sin(angle), Math.cos(angle));
}

@Component({
  selector: 'app-mascot',
  standalone: true,
  template: `
    <button
      #button
      type="button"
      (click)="boop()"
      [attr.aria-label]="'Boop the ' + label()"
      [style.width.px]="size()"
      [style.height.px]="size()"
    >
      <span #squash class="squash">
        <span
          class="layer"
          [style.background-image]="'url(' + directions() + ')'"
          [style.background-position]="directionPos()"
          [style.opacity]="reaction() ? 0 : 1"
        ></span>
        <!-- Always rendered so the sheet is fetched up front, never on the first click. -->
        <span
          class="layer"
          [style.background-image]="'url(' + reactions() + ')'"
          [style.background-position]="reactionPos()"
          [style.opacity]="reaction() ? 1 : 0"
        ></span>
      </span>
    </button>
  `,
  styles: `
    :host { display: block; flex-shrink: 0; }
    button {
      position: relative; display: block; padding: 0; border: 0;
      background: transparent; appearance: none; cursor: pointer; user-select: none;
    }
    .squash {
      position: relative; display: block; width: 100%; height: 100%; transform-origin: 50% 78%;
    }
    .layer {
      position: absolute; inset: 0; background-size: 300% 300%; background-repeat: no-repeat;
    }
  `,
})
export class MascotComponent {
  /** The 3x3 sheet of head directions (served path). */
  readonly directions = input.required<string>();
  /** The 3x3 sheet of expressions. */
  readonly reactions = input.required<string>();
  readonly size = input(140);
  /** What a screen reader calls it. */
  readonly label = input('mascot');

  private readonly button = viewChild.required<ElementRef<HTMLButtonElement>>('button');
  private readonly squash = viewChild.required<ElementRef<HTMLSpanElement>>('squash');

  protected readonly direction = signal<Direction>('center');
  protected readonly reaction = signal<Reaction | null>(null);
  protected readonly directionPos = computed(() => cell(DIRECTIONS.indexOf(this.direction())));
  protected readonly reactionPos = computed(() => cell(REACTIONS.indexOf(this.reaction() ?? 'blink')));

  private timers: number[] = [];
  private boops = { count: 0, at: 0 };

  constructor() {
    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(() => this.timers.forEach((t) => clearTimeout(t)));

    // Browser-only: skipped during SSR.
    afterNextRender(() => {
      if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        return;
      }

      let sector = -1;
      let pointer: { x: number; y: number } | null = null;

      const aim = () => {
        if (!pointer) {
          return;
        }
        const box = this.button().nativeElement.getBoundingClientRect();
        const dx = pointer.x - (box.left + box.width / 2);
        const dy = pointer.y - (box.top + box.height / 2);

        if (Math.hypot(dx, dy) < DEAD_ZONE) {
          sector = -1;
          this.direction.set('center');
          return;
        }

        // Hold the current sector until the pointer is well past its edge.
        const angle = Math.atan2(dy, dx);
        if (sector !== -1 && Math.abs(wrap(angle - sector * SECTOR)) < SECTOR / 2 + HYSTERESIS) {
          return;
        }

        sector = (Math.round(angle / SECTOR) + CLOCKWISE.length) % CLOCKWISE.length;
        this.direction.set(CLOCKWISE[sector]);
      };

      const onPointerMove = (event: PointerEvent) => {
        pointer = { x: event.clientX, y: event.clientY };
        aim();
      };

      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('scroll', aim, { passive: true });
      destroyRef.onDestroy(() => {
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('scroll', aim);
      });
    });
  }

  protected boop() {
    this.timers.forEach((t) => clearTimeout(t));
    this.timers = [];

    const later = (ms: number, next: Reaction | null) => {
      this.timers.push(window.setTimeout(() => this.reaction.set(next), ms));
    };

    const now = Date.now();
    const boops = this.boops;
    boops.count = now - boops.at < DIZZY_WINDOW ? boops.count + 1 : 1;
    boops.at = now;

    if (boops.count >= DIZZY_AFTER) {
      boops.count = 0;
      this.reaction.set('dizzy');
      later(DIZZY_END, null);
    } else {
      this.reaction.set('blink');
      later(BOOP_PAYOFF, PAYOFFS[(boops.count - 1) % PAYOFFS.length]);
      later(BOOP_END, null);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Per-keyframe easing with the effect itself linear: an easing on the effect
    // would reinterpret every offset and front-load the whole bounce.
    this.squash().nativeElement.animate(SQUASH, { duration: SQUASH_MS, easing: 'linear' });
  }
}
