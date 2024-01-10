import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MinionComponent } from './minions/minions.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {path:'', component:IndexComponent},
    {path:'minions', component:MinionComponent, children: [
        {path:'details/:minionName', component:DetailsComponent}
    ]},
    {path:'minions/:searchTerm', component:MinionComponent},
    {path:'**', component:NotFoundComponent}
];
