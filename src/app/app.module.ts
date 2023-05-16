import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginFormComponent } from './Components/admin-login-form/admin-login-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from '../_helpers/auth.interceptor';
import { AdminHeaderComponent } from './Components/admin-header/admin-header.component';

@NgModule({
  declarations: [AppComponent, AdminHeaderComponent, AdminLoginFormComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
