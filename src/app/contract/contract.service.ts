import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from './../shared/user.service';
import { Users } from './../shared/users.model';
import { Clauses } from './../shared/clauses.model';
import { Contract_type } from 'src/app/contract/outer-layout/setup/clauses/contracttypes';
@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contractBaseUrl:String;
  contracttypeBaseUrl:String;

  contractList=[];   //Contract_List
  // Clause:Clauses;
  ContractTypeList: Contract_type[];   //All_Contract_type
  clauseList=[];   //Clause_List

  constructor(public userService:UserService, private http:HttpClient, private router:Router, private activatedRoute:ActivatedRoute) {
    this.contractBaseUrl = environment.contractApiURL;
    this.contracttypeBaseUrl = environment.contractTypeApiURL;
  } //end of constructor_method

  //Contract List
  getAllContractsList(){
    return new Promise((resolve, reject)=>{
      this.http.get(this.contractBaseUrl+"/api/tenants/"+this.userService.loggedinUser.tenantId+"/dashboard/contracts").toPromise().then((res:Array<any>)=>{
this.contractList = res;
resolve(true);
      })
    });
  }

  //Create_Clauses
  createClauses(Clause){
    return new Promise<any>((resolve, reject) => {
      this.http.post(this.contracttypeBaseUrl+"/api/Clauses/SaveContractTypeClauses",Clause).toPromise().then(()=>{
        resolve(true);
      })
    });
  }
  //GetContract_Types
  getContractTypes(){
    return new Promise((resolve, reject)=>{
      this.http.get(this.contracttypeBaseUrl+"/api/ContractType?tenantId="+this.userService.loggedinUser.tenantId).toPromise().then(res=>{
        this.ContractTypeList = res as Contract_type[];
        resolve(console.log(this.ContractTypeList));
      })

    });
  }
// Clause list
getClauseList(){
  return new Promise((resolve, reject)=>{
    // var query:string;
    this.http.get(this.contracttypeBaseUrl+"/api/Clauses?tenantId="+this.userService.loggedinUser.tenantId).toPromise().then((res:Array<any>)=>{
this.clauseList = res;
resolve(true);
    })
  });
}

}//end of export class




