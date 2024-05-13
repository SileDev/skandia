import { Routes } from '@angular/router';
import { ObjectivesComponent } from './ui/pages/objectives/objectives.component';

export const routes: Routes = [
    { path: '', redirectTo: '/objectives', pathMatch: 'full' },
    { path: 'objectives', component: ObjectivesComponent },
];
