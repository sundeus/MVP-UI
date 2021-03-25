import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private _router: Router,private userService: UserService,private route:ActivatedRoute){

    
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("I am guard");
   var userId = localStorage.getItem("currentUserId");
    console.log(userId);
    
    if (localStorage.getItem('currentUserId')==="null" || localStorage.getItem('currentUserId')===null ){
      console.log("false")
 
      this._router.navigate(['/login/']);
      return false;
    }
    else{
      //this.userService.loggedinUser = JSON.parse(localStorage.getItem('currentUser'));
     // this.userService.loggedinUser.id=localStorage.getItem('currentUser');
     // this._router.navigate(['/app/dashboard']);
     this.userService.getUserDetailsById(userId).then((res:any)=>{
       this.userService.loggedinUser=res;
       this._router.navigate(['/app/dashboard']);
     })
     return true;
     }
     
     

    }
   
    
  }
  