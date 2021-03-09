import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  selectedCountry: any = null; //dropdown
  value1: string; 
  property: string;  //passowrd
  date6: Date; //calender-navigator
  repomanager: SelectItem[]; //dropdown
  selectedManager;
  role: SelectItem[]; //dropdown
  selectedRole;
  countries: any[] = [
      {name: 'Arizona', code: 'Arizona'},
      {name: 'California', value: 'California'},
      {name: 'Florida', code: 'Florida'},
      {name: 'Ohio', code: 'Ohio'},
      {name: 'Washington', code: 'Washington'}
  ];
  constructor() {
    this.repomanager = [
      { label: 'Sneha Sans', value: 'Sneha Sans' },
      { label: 'Swapna Jadhav', value: 'Swapna Jadhav' },
    ]; //dropdown

    this.role = [
      { label: 'Lorem Porem', value: 'Lorem Porem' },
      { label: 'Lorem Porem', value: 'Lorem Porem' },
    ]; //dropdown
   } //end of constructor() method

  ngOnInit(): void {
  }  //end of ngOnInit() method

} //end of export class method
