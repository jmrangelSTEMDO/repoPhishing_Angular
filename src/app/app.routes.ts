import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './componente/log-in/log-in.component';
import { LogInStemdoComponent } from './componente/log-in-stemdo/log-in-stemdo.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: "" , component : LogInComponent},
    {path:"stemdo", component:LogInStemdoComponent},
    {path: " " , component : LogInComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule {}
 