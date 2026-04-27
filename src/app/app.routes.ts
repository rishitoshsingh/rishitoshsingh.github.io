import { Routes } from '@angular/router';
import { PortfolioHomeComponent } from './portfolio-home.component';
import { TauEmotionComponent } from './tau-emotion.component';

export const routes: Routes = [
  { path: '', component: PortfolioHomeComponent },
  { path: 'tau-emotion', component: TauEmotionComponent }
];
