import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-templates-list',
  templateUrl: './templates-list.component.html',
  styleUrls: ['./templates-list.component.css']
})
export class TemplatesListComponent implements OnInit {
  Contracttypes: SelectItem[];       //dropdown1
  selectedContractype1: string;
  customtabledata: any[];
  cols: any[];
  first = 0;
  rows = 10;
  
  constructor() { 
    this.Contracttypes = [
      {label: 'NDA', value: 'NDA'},
      {label: 'MSA', value: 'MSA'},
      {label: 'LA', value: 'LA'}
  ];    //dropdown1_end

  }      // end bracket of Constructor() Method

  ngOnInit(): void {
    this.customtabledata = [
      {"Template Name": "Non Disclosure Agreement", "checked": false, "Description": "Legal Agreement", "Version": "1.0", "Language": "Marathi", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Partnership Agreement", "checked": false, "Description": "Legal Agreement", "Version": "1.1", "Language": "English", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Master Services Agreement", "checked": false, "Description": "Legal Agreement", "Version": "1.2", "Language": "Hindi", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Lease Agreement", "checked": false, "Description": "Legal Agreement", "Version": "2.1", "Language": "Pali", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Sponsorship Agreement", "checked": false, "Description": "Legal Agreement", "Version": "2.5", "Language": "Sanskrit", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Vendor Agreement", "checked": false, "Description": "Legal Agreement", "Version": "6.0", "Language": "	Bengali", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20","Status": "Active"},
      {"Template Name": "Declined Review", "checked": false, "Description": "Legal Agreement", "Version": "3.0", "Language": "Maithili", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Sponsorship Agreement",  "checked": false, "Description": "Legal Agreement", "Version": "3.1", "Language": "Odia", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Sponsorship Agreement", "checked": false, "Description": "Legal Agreement", "Version": "3.2", "Language": "Kannada", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Software License Agreement", "checked": false, "Description": "Legal Agreement", "Version": "3.3", "Language": "Telugu", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Non Disclosure Agreement", "checked": false, "Description": "Legal Agreement", "Version": "1.0", "Language": "Marathi", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Partnership Agreement", "checked": false, "Description": "Legal Agreement", "Version": "1.1", "Language": "English", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Master Services Agreement", "checked": false, "Description": "Legal Agreement", "Version": "1.2", "Language": "Hindi", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Lease Agreement", "checked": false, "Description": "Legal Agreement", "Version": "2.1", "Language": "Pali", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Sponsorship Agreement", "checked": false, "Description": "Legal Agreement", "Version": "2.5", "Language": "Sanskrit", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Vendor Agreement", "checked": false, "Description": "Legal Agreement", "Version": "6.0", "Language": "	Bengali", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20","Status": "Active"},
      {"Template Name": "Declined Review", "checked": false, "Description": "Legal Agreement", "Version": "3.0", "Language": "Maithili", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Sponsorship Agreement",  "checked": false, "Description": "Legal Agreement", "Version": "3.1", "Language": "Odia", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Sponsorship Agreement", "checked": false, "Description": "Legal Agreement", "Version": "3.2", "Language": "Kannada", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Software License Agreement", "checked": false, "Description": "Legal Agreement", "Version": "3.3", "Language": "Telugu", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Non Disclosure Agreement", "checked": false, "Description": "Legal Agreement", "Version": "1.0", "Language": "Marathi", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Partnership Agreement", "checked": false, "Description": "Legal Agreement", "Version": "1.1", "Language": "English", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Master Services Agreement", "checked": false, "Description": "Legal Agreement", "Version": "1.2", "Language": "Hindi", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Lease Agreement", "checked": false, "Description": "Legal Agreement", "Version": "2.1", "Language": "Pali", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Sponsorship Agreement", "checked": false, "Description": "Legal Agreement", "Version": "2.5", "Language": "Sanskrit", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Vendor Agreement", "checked": false, "Description": "Legal Agreement", "Version": "6.0", "Language": "	Bengali", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20","Status": "Active"},
      {"Template Name": "Declined Review", "checked": false, "Description": "Legal Agreement", "Version": "3.0", "Language": "Maithili", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Sponsorship Agreement",  "checked": false, "Description": "Legal Agreement", "Version": "3.1", "Language": "Odia", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Sponsorship Agreement", "checked": false, "Description": "Legal Agreement", "Version": "3.2", "Language": "Kannada", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"},
      {"Template Name": "Software License Agreement", "checked": false, "Description": "Legal Agreement", "Version": "3.3", "Language": "Telugu", "Created On": "31/08/20", "Created By": "Swapnali", "Last Updated On": "01/09/20", "Status": "Active"}
    ];
    this.cols = [
      { field: 'Template Name', header: 'Template Name' },
      { field: 'Description', header: 'Description'},
      { field: 'Version', header: 'Version'},
      { field: 'Language', header: 'Language'},
      { field: 'Created On', header: 'Created On'},
      { field: 'Created By', header: 'Created By'},
      { field: 'Last Updated By', header: 'Last Updated On'},
      { field: 'Status', header: 'Status'},
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
}     // end bracket of export class
