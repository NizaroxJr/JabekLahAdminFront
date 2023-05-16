import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginFormComponent } from './Components/admin-login-form/admin-login-form.component';

const routes: Routes = [
  { path: '', component: AdminLoginFormComponent },
  { path: 'admin/logIn', component: AdminLoginFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
