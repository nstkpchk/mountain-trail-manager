import { Routes } from '@angular/router';
import { Mountains } from './mountains/mountains';
import { MountainsAdd } from './mountains-add/mountains-add';
import { MountainsEdit } from './mountains-edit/mountains-edit';
import { MountainsDetails } from './mountains-details/mountains-details';
import { TrailsAdd } from './trails-add/trails-add';
import { TrailsEdit } from './trails-edit/trails-edit';
import { TrailsDetails } from './trails-details/trails-details';

export const routes: Routes = [
        { path: 'mountains', component: Mountains },
        { path: 'mountains/add', component: MountainsAdd },
        {path: 'mountains/edit/:id',component: MountainsEdit},
        { path: 'mountains/:id', component: MountainsDetails },
        {path: 'trails/add/:mountainId', component:TrailsAdd},
        { path: 'trails/edit/:id/:mountainId', component:TrailsEdit },
        {path: 'trails/details/:trailId/:mountainId', component:TrailsDetails},
        { path: '', redirectTo: '/mountains', pathMatch: 'full' },
];
