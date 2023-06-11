import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'start-view',
  templateUrl: './start-view.component.html',
  styleUrls: ['./start-view.component.css']
})
export class StartViewComponent implements OnInit {

  currentAdmin:any;
  constructor(private token: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    if(this.token.getToken()==null){
      this.router.navigate(['admin/logIn']);
    }
     this.currentAdmin=this.token.getAdmin();

  }

}
