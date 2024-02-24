import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProblemsPageComponent } from './pages/problems-page/problems-page.component';
import { ProblemPageComponent } from './pages/problem-page/problem-page.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'problems', component: ProblemsPageComponent, pathMatch: 'full'},
    {path: 'problem/:id', component: ProblemPageComponent, pathMatch: 'full'}
]