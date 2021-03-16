import { Injectable } from '@angular/core';
import { Users } from './users.model';
import { environment } from 'src/environments/environment.prod';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class UserService {
loggedinUser: Users=null;
loggedIn: boolean;

initiatedContracts=[];       //KPI_1_initiated_contracts
pendingSignatureContracts=[];    //KPI_2_pending_Signatures
pendingApprovalContracts=[];     //KPI_3_Pending_Approval
expiringContracts=[];            //KPI_4_Expiring

  contractBaseUrl:String;
  contracttypeBaseUrl:String;


  constructor( private router: Router,private activatedRoute: ActivatedRoute,private http:HttpClient) {
    this.contractBaseUrl = environment.contractApiURL;
    this.contracttypeBaseUrl = environment.contractTypeApiURL;
  }
//LOGIN code
 signInWithUsernamePassword(username:String,password:String,redirect_url:string):void{
   // console.log("logged in");
    document.getElementById('loader').style.display='block';
  //  console.log("logged in");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

  let User = Object();
    User.emailAddress = username;
    User.password = password;
    console.log(User.password);
    this.http.post(this.contractBaseUrl+"/api/authenticateuser",User,httpOptions).toPromise().then((response)=>{
      console.log(response);
      this.loggedIn = true;
      this.loggedinUser = response as Users;
      console.log("logged in");
      console.log(response);
   //console.log(this.loggedinUser);
   document.getElementById('loader').style.display='none';
   window.location.href = '/app'
   //   console.log(res);
        });

    }

     ///////ForgotPassword///////
  updatePassword(email:string){

    return this.http.get(this.contractBaseUrl+"/api/forgotpassword?email="+email,{responseType:'text'}).toPromise();

  }
  //KPI_1_Initiated
  getInitiatedContractsByUser(){
    return new Promise((resolve, reject)=>{
      this.http.get(this.contracttypeBaseUrl+"/api/Validation/GetContractInitiatedByUser?UserId="+this.loggedinUser.id+"&tenantId="+this.loggedinUser.tenantId).toPromise().then((res:Array<any>)=>{
this.initiatedContracts = res;
resolve(true);
      })
    });
  }
//KPI_2_pending_signatures
getContractsByPendingSignature(){
  return new Promise((resolve, reject)=>{
    this.http.get(this.contracttypeBaseUrl+"/api/Validation/GetContractbyPendingSignature?UserId="+this.loggedinUser.id+"&tenantId="+this.loggedinUser.tenantId).toPromise().then((res:Array<any>)=>{
this.pendingSignatureContracts = res;
resolve(true);
    })
  });
}
//KPI_3_Pending_Approval
getContractsByPendingApproval(){
  return new Promise((resolve, reject)=>{
    this.http.get(this.contracttypeBaseUrl+"/api/Validation/GetContractApproversByUser?UserId="+this.loggedinUser.id+"&tenantId="+this.loggedinUser.tenantId).toPromise().then((res:Array<any>)=>{
this.pendingApprovalContracts = res;
resolve(true);
    })
  });
}
//KPI_4_Expiring
getContractsByExpiring(){
  return new Promise((resolve, reject)=>{

  })
}

}
