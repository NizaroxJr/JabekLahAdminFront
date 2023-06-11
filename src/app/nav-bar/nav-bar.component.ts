import { TokenStorageService } from './../_services/token-storage.service';
import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { navbarData } from './nav-data';
import { animate, style, transition, trigger } from '@angular/animations';






interface SideNavToggle{
  screenWidth:number;
  collapsed: boolean;
  
}



@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations:[
    trigger('fadeInOut', [
      transition(':enter',[
        style({opacity:0}),
        animate('350ms',
        style({opacity:1})
        )
      ]
      ),transition(':leave',[
        style({opacity:1}),
        animate('350ms',
        style({opacity:0})
        )
      ])
    ])]
})
export class NavBarComponent implements OnInit {
  


  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth: number ;
  navData = navbarData;




  ngOnInit(): void {
    this.screenWidth=window.innerWidth;
  }


  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth=window.innerWidth;
    if(this.screenWidth<=768){
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth : this.screenWidth});
    }
  }
  



  

  constructor(
    private router: Router, private tokenStorage:TokenStorageService
  ) { }

  

  logOutClicked(){
    this.router.navigate(['admin/logIn']);
    this.tokenStorage.signOut();
    
  }
  
  toggleCollapse():void{
    this.collapsed= !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth : this.screenWidth});
  }
  closeSidenav():void{
    this.collapsed= false
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth : this.screenWidth});

  }




  

  
}
