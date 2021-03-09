import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  contracttype: SelectItem[];   //dropdown1
  selectedCtype1: string;  
  transactiontype: SelectItem[];  //dropdown2
  selectedttype1: string; 
  ndattype: SelectItem[];  //dropdown3
  selectedNtype1: string;
  date1: Date;   //calender
  corporationtype: SelectItem[]; 
  selectedCptype1: string;  //dropdown4
  City: SelectItem[]; 
  selectedCity1: string;  //dropdown5
  Country: SelectItem[]; 
  selectedCountry1: string;  //dropdown6
  States: SelectItem[]; 
  selectedState1: string;  //dropdown7
  Lawstates: SelectItem[]; 
  selectedLawState1: string;  //dropdown8

  constructor() {
    this.contracttype = [
      {label: 'Mutual NDA', value: 'ct1'},
      {label: 'MDA', value: 'ct2'},
      {label: 'Non-Disclosure Agreement', value: 'ct3'},
      {label: 'Offer Letter', value: 'ct4'},
      {label: 'Lease Agreement', value: 'ct5'}
  ]; //dropdown1
  this.transactiontype = [
    {label: 'Own', value: 'Own'},
    {label: 'Third party', value: 'Third Party'},
    {label: 'Legacy', value: 'legacy'}

]; //dropdown2
this.ndattype = [
  {label: 'Lateral', value: 'l1'},
  {label: 'Unilateral', value: 'ul2'}
 
]; //dropdown3
this.corporationtype = [
  {label: 'Lateral', value: 'l3'},
  {label: 'Unilateral', value: 'ul4'}
 
];   //dropdown4
this.City = [
  {label: 'Jalna', value: 'cj1'},
  {label: 'Aurangabad', value: 'ca2'},
  {label: 'Pune', value: 'cp3'},
  {label: 'Kolhapur', value: 'ck4'},
  {label: 'Nashik', value: 'cn5'}

];   //dropdown5
this.Country = [
  {label: 'India', value: 'India'},
  {label: 'Japan', value: 'Japan'},
  {label: 'Iran', value: 'Iran'},
  {label: 'Iceland', value: 'Iceland'},
  {label: 'Italy', value: 'Italy'}
];   //dropdown6
this.States = [
  {label: 'Maharashtra', value: 'SM1'},
  {label: 'Gujarat', value: 'SG2'},
  {label: 'Kerala', value: 'SK3'},
  {label: 'Delhi', value: 'SD4'},
  {label: 'Odisha', value: 'SO5'}
];   //dropdown7
this.Lawstates = [
  {label: 'Unkomwn', value: 'Unkomwn'},
  {label: 'Unkomwn', value: 'Unkomwn'},
  {label: 'Unkomwn', value: 'Unkomwn'},
  {label: 'Unkomwn', value: 'Unkomwn'},
  {label: 'Unkomwn', value: 'Unkomwn'}
];   //dropdown8

   }

  ngOnInit(): void {
  }

}
