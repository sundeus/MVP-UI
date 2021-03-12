import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checked: boolean = false;
  formdata:FormGroup;


  constructor(private userService: UserService,private activatedRoute: ActivatedRoute ) {


    this.formdata = new FormGroup({
      username :new FormControl(""),
      password : new FormControl("")
    })
   }  //end of constructor_method

  ngOnInit(): void {
  } //end of ngOnit() method

  signInWithUsernamePassword(){
    console.log("logged in");
    this.userService.signInWithUsernamePassword(this.formdata.value.username,
      this.formdata.value.password,this.activatedRoute.snapshot.paramMap.get('redirect_url'));
return 0;

  }
  
}  //end of export_class
