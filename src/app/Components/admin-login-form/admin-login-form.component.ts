import { Administrator } from './../../Interfaces(Modules)/Administrator';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';


@Component({
  selector: 'admin-login-form',
  templateUrl: './admin-login-form.component.html',
  styleUrls: ['./admin-login-form.component.css']
})
export class AdminLoginFormComponent implements OnInit {

  admin:Administrator ={
    logIn:"",
    password:"",
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
 
  constructor(
    private router: Router,
    private authService: AuthService, private tokenStorage: TokenStorageService
  ){

   }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()!=null) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAdmin().roles;
      this.router.navigate(['admin/home']);
    }
   
  }


  submitAdminLogInForm(form:any){

  console.log(form);

  const { logIn, password } = this.admin;
  this.authService.login(logIn, password).subscribe({
    next: data => {
      console.log(data)
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveAdmin(data);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAdmin().roles;
      this.router.navigate(['/admin/home']);
     /* this.reloadPage();*/
    },
    error: err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
   
  });
}
reloadPage(): void {
  window.location.reload();
}
 
    }
   

    
  

