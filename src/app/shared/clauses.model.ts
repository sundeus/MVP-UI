export class Clauses{
clauseId:number;
tenantId:number;
name:string;
description:string;
text:string;
language_Id:number=1;
isMandatory:boolean=false;
isTracked:boolean=false;
contractTypeId:number;
contractTypeName:string=null;
templateId:number=1;
createdBy:string;
// createdDate:Date=new Date();
createdDate:string;
updatedBy:string
// updatedDate:Date=new Date();
updatedDate:string;
isDeleted:boolean=false
}



