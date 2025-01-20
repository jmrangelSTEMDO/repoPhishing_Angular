import { Routes } from '@angular/router';
import { LogInComponent } from './componente/log-in/log-in.component';
import { LogInStemdoComponent } from './componente/log-in-stemdo/log-in-stemdo.component';

export const routes: Routes = [
    {path:"", component:LogInComponent},
    {path:"stemdo", component:LogInStemdoComponent}
];
