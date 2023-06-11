import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentAddFormComponent } from './agent-add-form/agent-add-form.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { AdminLoginFormComponent } from './Components/admin-login-form/admin-login-form.component';
import { ListAgentsComponent } from './list-agents/list-agents.component';

const routes: Routes = [
  {path:'', redirectTo:'/admin/logIn',pathMatch:'full'},
  {path:'admin/logIn', component: AdminLoginFormComponent},
  {path:'admin/home',component: AdminHomeComponent },
  {path:'admin/addAgent',component:AgentAddFormComponent},
  {path:'admin/listAgents',component:ListAgentsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
