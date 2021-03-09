import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checked: boolean = false;
  displayModal: boolean;  //Modal_forgot Password

  constructor() { }

  ngOnInit(): void {
  }

  showModalDialog() {
    this.displayModal = true;
}
}
