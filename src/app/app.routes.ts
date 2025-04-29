import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './componente/log-in/log-in.component';
import { LogInStemdoComponent } from './componente/log-in-stemdo/log-in-stemdo.component';
import { NgModule } from '@angular/core';
import { FinalComponent } from './componente/final/final.component';

export const routes: Routes = [
    {path: "" , component : LogInComponent, data: { animation: 'slideInRight'}},
    {path:"stemdo", component:LogInStemdoComponent, data: { animation: 'slideInRight'}},
    {path: "final" , component : FinalComponent, data: { animation: 'slideInRight'}},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule {}
 