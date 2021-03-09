import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  customtabledata: any[];
  cols: any[];
  first = 0;
  rows = 10;
 
  constructor() { } //end of constructor() method

  ngOnInit(): void {
    this.customtabledata = [
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},      
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},      
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},      
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},      
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},     
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},      
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},      
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},      
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},     
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},      
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},      
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},      
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},      
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},      
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},      
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},      
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},      
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""},
      {"Role Name": "Lorem Ipsum", "Created By": "23/04/21", "Status": ""}
      ];
    this.cols = [
      { field: 'Role Name', header: 'Role Name', width: '25%'},
      { field: 'Created By', header: 'Created By', width: '20%'},
      // { field: 'Role', header: 'Role'},
      // { field: 'Email', header: 'Email', width: '25%'},
      // { field: 'Created On', header: 'Created On'},
      { field: 'Status', header: 'Status', width: '20%'},
      { field: 'image', header: 'Action', width: '10%'}
  ];
  } //end of ngOnInit() method
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


} //end of export class 
