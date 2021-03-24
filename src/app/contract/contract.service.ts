import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from './../shared/user.service';
import { Users } from './../shared/users.model';
@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contractBaseUrl:String;
  contracttypeBaseUrl:String;

  contractList=[];   //Contract_List

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
}//end of export class




