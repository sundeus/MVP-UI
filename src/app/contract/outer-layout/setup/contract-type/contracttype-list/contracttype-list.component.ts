import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-contracttype-list',
  templateUrl: './contracttype-list.component.html',
  styleUrls: ['./contracttype-list.component.css']
})
export class ContracttypeListComponent implements OnInit {
  customtabledata: any[];
  cols: any[];
  first = 0;
  rows = 10;
  constructor() { }          // end bracket of Constructor() Method

  ngOnInit(): void {
    this.customtabledata = [
      {"Contract Type": "Non Disclosure Agreement", "checked": false, "Created By": "111232", "Last Updated By": "Human Resource", "Version": "1.0", "Status": ""},
      {"Contract Type": "Partnership Agreement", "checked": false, "Created By": "Admin", "Last Updated By": "Human Resource", "Version": "Manager", "Status": ""},
      {"Contract Type": "Master Services Agreement", "checked": false, "Created By": "Admin", "Last Updated By": "Human Resource", "Version": "Manager" ,"Status": ""},
      {"Contract Type": "Lease Agreement", "checked": false, "Created By": "Admin", "Last Updated By": "Human Resource","Version": "Manager","Status": ""},
      {"Contract Type": "Sponsorship Agreement", "checked": false, "Created By": "Admin", "Last Updated By": "Human Resource","Version": "Manager", "Status": ""},
      {"Contract Type": "Vendor Agreement", "checked": false, "Created By": "Admin", "Last Updated By": "Human Resource", "Version": "Manager","Status": ""},
      {"Contract Type": "Declined Review", "checked": false, "Created By": "Admin", "Last Updated By": "Human Resource","Version": "Manager", "Status": ""},
      {"Contract Type": "Sponsorship Agreement",  "checked": false, "Created By": "Admin", "Last Updated By": "Human Resource","Version": "Manager", "Status": ""},
      {"Contract Type": "Sponsorship Agreement", "checked": false, "Created By": "Admin", "Last Updated By": "Human Resource", "Version": "Manager","Status": ""},
      {"Contract Type": "Software License Agreement", "checked": false, "Created By": "Admin", "Last Updated By": "Human Resource","Version": "Manager", "Status": ""},
    ];
    this.cols = [
      { field: 'Contract Type', header: 'Contract Type' },
      { field: 'Created By', header: 'Created By'},
      { field: 'Last Updated By', header: 'Last Updated By'},
      { field: 'Version', header: 'Version'},
      { field: 'Status', header: 'Status'},
      { field: 'image', header: 'Action'}
  ];
  }      // end bracket of ngOnInit():void Method
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
}   //end bracket of export class
