import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-supporting-doc',
  templateUrl: './supporting-doc.component.html',
  styleUrls: ['./supporting-doc.component.css']
})
export class SupportingDocComponent implements OnInit {
  customtabledata: any[];  //table
  cols: any[];
  constructor() { }   //end of constructor method

  ngOnInit(): void {
    this.customtabledata = [
      { "Sr #": "1", "Association Name": "Lorem Ipsum", "Association Stage": "Lorem Ipsum", "Association Type": "Lorem Ipsum", "Contract ID": "Lorem Ipsum","Linked Document": "Lorem Ipsum","Status":"Lorem Ipsum"},
      { "Sr #": "2", "Association Name": "Lorem Ipsum", "Association Stage": "Lorem Ipsum", "Association Type": "Lorem Ipsum", "Contract ID": "Lorem Ipsum","Linked Document": "Lorem Ipsum","Status":"Lorem Ipsum"},
      { "Sr #": "3", "Association Name": "Lorem Ipsum", "Association Stage": "Lorem Ipsum", "Association Type": "Lorem Ipsum", "Contract ID": "Lorem Ipsum","Linked Document": "Lorem Ipsum","Status":"Lorem Ipsum"},
      { "Sr #": "4", "Association Name": "Lorem Ipsum", "Association Stage": "Lorem Ipsum", "Association Type": "Lorem Ipsum", "Contract ID": "Lorem Ipsum","Linked Document": "Lorem Ipsum","Status":"Lorem Ipsum"},
      { "Sr #": "5", "Association Name": "Lorem Ipsum", "Association Stage": "Lorem Ipsum", "Association Type": "Lorem Ipsum", "Contract ID": "Lorem Ipsum","Linked Document": "Lorem Ipsum","Status":"Lorem Ipsum"},
      { "Sr #": "6", "Association Name": "Lorem Ipsum", "Association Stage": "Lorem Ipsum", "Association Type": "Lorem Ipsum", "Contract ID": "Lorem Ipsum","Linked Document": "Lorem Ipsum","Status":"Lorem Ipsum"},
      { "Sr #": "7", "Association Name": "Lorem Ipsum", "Association Stage": "Lorem Ipsum", "Association Type": "Lorem Ipsum", "Contract ID": "Lorem Ipsum","Linked Document": "Lorem Ipsum","Status":"Lorem Ipsum"},
      { "Sr #": "8", "Association Name": "Lorem Ipsum", "Association Stage": "Lorem Ipsum", "Association Type": "Lorem Ipsum", "Contract ID": "Lorem Ipsum","Linked Document": "Lorem Ipsum","Status":"Lorem Ipsum"},
      { "Sr #": "9", "Association Name": "Lorem Ipsum", "Association Stage": "Lorem Ipsum", "Association Type": "Lorem Ipsum", "Contract ID": "Lorem Ipsum","Linked Document": "Lorem Ipsum","Status":"Lorem Ipsum"},
      { "Sr #": "10", "Association Name": "Lorem Ipsum", "Association Stage": "Lorem Ipsum", "Association Type": "Lorem Ipsum", "Contract ID": "Lorem Ipsum","Linked Document": "Lorem Ipsum","Status":"Lorem Ipsum"}
  ];
    this.cols = [
      { field: 'Sr #', header: 'Sr #', 'width': '5%'},
      { field: 'Association Name', header: 'Association Name'},
      { field: 'Association Stage', header: 'Association Stage'},
      { field: 'Association Type', header: 'Association Type'},
      { field: 'Upload', header: 'Upload'},
      { field: 'Contract ID', header: 'Contract ID'},
      { field: 'Linked Document', header: 'Linked Document'},
      { field: 'Status', header: 'Status'},
      { field: 'image', header: 'Action', 'width': '5%'}
  ];
  }  //end of ngOnInit method
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

} //end of export class
