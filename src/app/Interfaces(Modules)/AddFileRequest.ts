import { Byte } from "@angular/compiler/src/util";

export interface AddFileRequest{
   
    file_id:number;
    owneruid:string;
    description:string;
    name:String;
    type:String;
    file:File;
}
