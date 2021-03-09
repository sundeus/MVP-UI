import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  contracttypes: SelectItem[];    //dropdown1
  selectedCtype1: string;
  transactiontypes: SelectItem[];    //dropdown2
  selectedTransaction1: string;
  checked2: boolean = true;
  constructor() {
    this.contracttypes = [
      {label: 'NDA', value: 'NDA'},
      {label: 'MSA', value: 'MSA'},
      {label: 'Offer Letter', value: 'Offer Letter'},
      {label: 'LA', value: 'LA'}
  ];   //dropdown1_ContractType_end
  this.transactiontypes = [
    {label: 'Own', value: 'Own'},
    {label: 'Third Party', value: 'Third Party'},
    {label: 'Legacy', value: 'Legacy'}
];   //dropdown2_transactiontypes_end
   }  //end of constructor() method

  ngOnInit(): void {
  }  // end of ngOnInit() method

}// end of export class_method
