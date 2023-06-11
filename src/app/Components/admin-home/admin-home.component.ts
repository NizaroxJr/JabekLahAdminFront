import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(
    private router: Router, private tokenStorage:TokenStorageService
  ) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()==null){
      this.router.navigate(['admin/logIn']);
  }

}
}
