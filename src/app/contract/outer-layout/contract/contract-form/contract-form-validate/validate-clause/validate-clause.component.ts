import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-validate-clause',
  templateUrl: './validate-clause.component.html',
  styleUrls: ['./validate-clause.component.css']
})
export class ValidateClauseComponent implements OnInit {
  customtabledata: any[];
  cols: any[];
  displayModal: boolean;    //Modaldialog show
  displayLogModal: boolean;   //Auditlog modal_show

  constructor() { }   //end bracket of Constructor() Method

ngOnInit(): void {
    this.customtabledata = [
      { "Clause Name": "Legal Agreement", "Version": "1.0", "Language": "Marathi", "Analytics": "Lorem Ipsum"},
      { "Clause Name": "Legal Agreement", "Version": "1.1", "Language": "Enlish", "Analytics": "Lorem Ipsum" },
      { "Clause Name": "Legal Agreement", "Version": "1.2", "Language": "Hindi", "Analytics": "Lorem Ipsum" },
      { "Clause Name": "Legal Agreement", "Version": "2.1" , "Language": "Marathi", "Analytics": "Lorem Ipsum"},
      { "Clause Name": "Legal Agreement", "Version": "2.1", "Language": "English", "Analytics": "Lorem Ipsum" },
      { "Clause Name": "Legal Agreement", "Version": "2.1", "Language": "Hindi", "Analytics": "Lorem Ipsum"},
      { "Clause Name": "Legal Agreement", "Version": "2.1", "Language": "Marathi", "Analytics": "Lorem Ipsum"},
      { "Clause Name": "Legal Agreement", "Version": "2.1", "Language": "Englsih", "Analytics": "Lorem Ipsum" },
      { "Clause Name": "Legal Agreement", "Version": "2.1", "Language": "Hindi", "Analytics": "Lorem Ipsum" },
      { "Clause Name": "Legal Agreement", "Version": "2.1", "Language": "Marathi", "Analytics": "Lorem Ipsum" }
  ];
    this.cols = [
      { field: 'Clause Name', header: 'Clause Name', width: '25%'},
      { field: 'Version', header: 'Version'},
      { field: 'Language', header: 'Language'},
      { field: 'Analytics', header: 'Analytics', width: '35%'},
      { field: 'image', header: 'Action', width: '10%'}
  ];
  }   // end bracket of ngOnInit():void Method

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

showModalDialog() {
  this.displayModal = true;
}
showLogModalDialog() {
  this.displayLogModal = true;
}


}  //end of export class bracket
