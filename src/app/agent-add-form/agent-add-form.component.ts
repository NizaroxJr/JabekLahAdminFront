import { AddFileRequest } from './../Interfaces(Modules)/AddFileRequest';
import { HttpClient } from '@angular/common/http';
import { Agent } from '../Interfaces(Modules)/Agent';
import { Component, Inject, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-agent-add-form',
  templateUrl: './agent-add-form.component.html',
  styleUrls: ['./agent-add-form.component.css']
})

export class AgentAddFormComponent implements OnInit {

  agent ={
    agentId:0,
    agentPassword:"",
    firstName:"",
    lastName:"",
    emailAddress:"",
    dateOfBirth:"",
    homeAddress:"",
    phoneNumber:"",
    identityCardNumber:"",
    identityJustification:"",
    isFirstLogIn:true,
    patentNumber:"",
    commerceregistrySerialNumber:"",
  };

  addfileRequest:AddFileRequest={
    file_id:0,
    name:"",
    owneruid:"",
    description:"",
    type:"",
    file:null,
  }

  file:File;
  owneruid:string;
  description:string;


  IdentTypes:string[] = ["C.I.N","Passport","Driver License"];
  errorMessage:String;

  constructor(
    private http:HttpClient,
    private adminService:AdminService,
    private router: Router,
    private tokenStorage:TokenStorageService
    ) {
     
   }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()==null){
      this.router.navigate(['admin/logIn']);
    }
    
  }

  submitAgentAddForm(form:any){
   
     console.log(form);
  if(form.valid){

  this.adminService.saveAgent(
    this.agent.firstName,
    this.agent.lastName,
    this.agent.emailAddress,
    this.agent.identityJustification,
    this.agent.identityCardNumber,
    this.agent.dateOfBirth,
    this.agent.phoneNumber,
    this.agent.commerceregistrySerialNumber,
    this.agent.patentNumber,
    this.agent.homeAddress,
    ).subscribe({
      next: data => {
        console.log("agent saved successfully");
        this.owneruid=data.username;
        console.log(data.username);

      
      },
      error: err => {
        this.errorMessage = err.error.message;
       
      }
     
    });
  }
}
  
}
