import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-clauses-list',
  templateUrl: './clauses-list.component.html',
  styleUrls: ['./clauses-list.component.css']
})
export class ClausesListComponent implements OnInit {
  Contracttypes: SelectItem[];       //dropdown1
  selectedContractype1: string;
  templates: SelectItem[];       //dropdown2
  selectedtemplate1: string;
  customtabledata: any[];
  cols: any[];
  first = 0;  //pagination
  rows = 10;

  constructor() {
    this.Contracttypes = [
      {label: 'NDA', value: 'NDA'},
      {label: 'MSA', value: 'MSA'},
      {label: 'LA', value: 'LA'}
  ];    //dropdown1_end
  this.templates = [
    {label: 'Template 1', value: 'Template 1'},
    {label: 'Template 1', value: 'Template 1'},
    {label: 'Template 1', value: 'Template 1'}
];    //dropdown2_end
   }    // end bracket of Constructor() Method

  ngOnInit(): void {
    this.customtabledata = [
      {"Contract Type": "Non Disclosure Agreement", "Clause Name": "Legal Agreement", "Mandatory": "No", "Version": "1.0" },
      {"Contract Type": "Partnership Agreement", "Clause Name": "Legal Agreement", "Mandatory": "Yes", "Version": "1.1" },
      {"Contract Type": "Master Services Agreement", "Clause Name": "Legal Agreement", "Mandatory": "No", "Version": "1.2" },
      {"Contract Type": "Lease Agreement", "Clause Name": "Legal Agreement", "Mandatory": "Yes", "Version": "2.1" },
      {"Contract Type": "Sponsorship Agreement", "Clause Name": "Legal Agreement", "Mandatory": "Yes", "Version": "2.1" },
      {"Contract Type": "Vendor Agreement", "Clause Name": "Legal Agreement", "Mandatory": "Yes", "Version": "2.1" },
      {"Contract Type": "Declined Review", "Clause Name": "Legal Agreement", "Mandatory": "Yes", "Version": "2.1" },
      {"Contract Type": "Sponsorship Agreement", "Clause Name": "Legal Agreement", "Mandatory": "Yes", "Version": "2.1" },
      {"Contract Type": "Sponsorship Agreement", "Clause Name": "Legal Agreement", "Mandatory": "Yes", "Version": "2.1" },
      {"Contract Type": "Software License Agreement", "Clause Name": "Legal Agreement", "Mandatory": "Yes", "Version": "2.1" },
      {"Contract Type": "Non Disclosure Agreement", "Clause Name": "Legal Agreement", "Mandatory": "Yes", "Version": "2.1" },
      {"Contract Type": "Partnership Agreement", "Clause Name": "Legal Agreement", "Mandatory": "Yes", "Version": "2.1" },
      {"Contract Type": "Master Services Agreement", "Clause Name": "Legal Agreement", "Mandatory": "Yes", "Version": "2.1" }
   ];
    this.cols = [
      { field: 'Contract Type', header: 'Contract Type' },
      { field: 'Clause Name', header: 'Clause Name'},
      { field: 'Mandatory', header: 'Mandatory'},
      { field: 'Version', header: 'Version'},
      { field: 'image', header: 'Action'}
  ];
  }    // end bracket of ngOnInit():void Method
  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
        let value1 = data1[event.field];
        let value2 = data2[event.field];
        let result = null;

        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string')
            result = value1.localeCompare(value2);
        else
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

        return (event.order * result);
    });
} // end bracket of customSort method() 

// Start pagination section code
 next() {
  this.first = this.first + this.rows;
}
prev() {
  this.first = this.first - this.rows;
}
reset() {
  this.first = 0;
}
isLastPage(): boolean {
  return this.first === (this.customtabledata.length - this.rows);
}
isFirstPage(): boolean {
  return this.first === 0;
}
// end pagination

} //end of export class bracket
