import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email:string="";
  flag:string="";
  alertMessage: string;

  constructor( public userService:UserService,private router: Router,private route: ActivatedRoute) {
    
    
  }

  ngOnInit(): void {
  }

  updatePassword(){
    this.userService.updatePassword(this.email).then((res)=>{
      console.log(res);
      var message=res.split(',');
      if(message[0]=="<200 OK OK")
      this.flag="alert-success";
     else
     this.flag="alert-danger";


      this.alertMessage=message[1];
      console.log(res.split(',')[1]);
    })
  }
}
