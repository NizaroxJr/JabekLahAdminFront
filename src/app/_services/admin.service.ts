import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../Interfaces(Modules)/Agent';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  const httpOptionsFile = {
	headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data ; boundary=---' })
  };

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminUrl: string;

	constructor(private http: HttpClient) {
		this.adminUrl = "http://localhost:8080/api/auth/";
	}

  public saveAgent(

	nom:String,
	prenom:String,
	email:String,
	pieceIdentite: string,
    numPieceIdentite: string,
    dateNaissance: string,
	numTel: string,
    numMatriculation: string,
    numPattente: string,
	adresse:String,
	
	) {
		return this.http.post<Agent>(this.adminUrl + "agent/add",
		 {
			nom,
			prenom,
			email,
			pieceIdentite,
			numPieceIdentite,
			dateNaissance,
			numTel,
			numMatriculation,
			numPattente,
			adresse,
		},
		httpOptions
		);
	}


  public findAllAgents(): Observable<any[]> {
		return this.http.get<any[]>(
			"http://localhost:8080/adminController/listAgents"
				);


}
public deleteAgent(agentId: number): Observable<any> {
  return this.http.delete(`${this.adminUrl}/deleteAgent/${agentId}`);
}

public saveAgentFile(
	file:File,
	owneruid: string,
	description:string,
	
){

	return this.http.post<any>("http://localhost:8080/file/uploadAgentFile",{
		file,owneruid,description
	},httpOptionsFile);
}
}
