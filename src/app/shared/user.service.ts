import { Injectable } from '@angular/core';
import { Users } from './users.model';
import { environment } from 'src/environments/environment.prod';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  loggedinUser: Users=null;
  
  loggedIn: boolean;
  
  contractBaseUrl:String;
  contracttypeBaseUrl:String;

  constructor( private router: Router,private activatedRoute: ActivatedRoute,private http:HttpClient) { 

    
 
    this.contractBaseUrl = environment.contractApiURL;
    this.contracttypeBaseUrl = environment.contractTypeApiURL;
  }



  signInWithUsernamePassword(username:String,password:String,redirect_url:string):void{
   // console.log("logged in");
    //document.getElementById('loader').style.display='block';
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
   
     
       
          
        
   //   console.log(res);
        });
        
   
     // this.router.navigate([decodeURIComponent(redirect_url)])
     
      
      
    
  }
}
