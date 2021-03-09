import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-contract-form-contract-template',
  templateUrl: './contract-form-contract-template.component.html',
  styleUrls: ['./contract-form-contract-template.component.css']
})
export class ContractFormContractTemplateComponent implements OnInit {
  customtabledata: any[];      // table1 var
  cols: any[];
  val1: string;  //radiobutton

  constructor() { }   //end-of-constructorMethod-bracket

  ngOnInit(): void {
    this.customtabledata = [
      { "Template Name": "Non-Disclosure Agreement-legal Templates", "Version": "1.0", "Description": "Lorem Ipsum", "image":"" },
      { "Template Name": "Employee Non-Disclosure Agreement", "Version": "2.2", "Description": "Lorem Ipsum", "image":"" },
      { "Template Name": "Unilateral NDA Template", "Version": "3.1.1", "Description": "Lorem Ipsum", "image":"" },
      { "Template Name": "One Way Non-Disclosure Template", "Version": "4.0", "Description": "Lorem Ipsum", "image":"" },
      { "Template Name": "Mutual Agreement", "Version": "5.0", "Description": "Lorem Ipsum", "image":"" }
    ];
    this.cols = [
      { field: 'Template Name', header: 'Template Name' },
      { field: 'Version', header: 'Version'},
      { field: 'Description', header: 'Description'},
      { field: 'image', header: 'Action'}
  ];     // Table_1 endd
  }  // end bracket of ngOnInit():void Method
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
} // end bracket of export class

