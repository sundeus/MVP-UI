import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checked: boolean = false;

  constructor() { }  //end of constructor_method

  ngOnInit(): void {
  } //end of ngOnit() method


}  //end of export_class
