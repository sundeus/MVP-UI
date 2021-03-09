import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  customtabledata: any[];
  cols: any[];
  first = 0;
  rows = 10;
 
  constructor() { }  // end bracket of Constructor() Method

  ngOnInit(): void {
    this.customtabledata = [
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""},
      {"User Name": "Swapnali Jadhav", "Department": "Human Resource", "Role": "Manager", "Email": "loremipsum@lorem.com", "Created On": "23/04/21", "Status": ""}
  ];
    this.cols = [
      { field: 'User Name', header: 'User Name'},
      { field: 'Department', header: 'Department'},
      { field: 'Role', header: 'Role'},
      { field: 'Email', header: 'Email', width: '25%'},
      { field: 'Created On', header: 'Created On'},
      { field: 'Status', header: 'Status'},
      { field: 'image', header: 'Action', width: '8%'}
  ];
  } //end bracket of ngOnInit() Method
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

}  //end of export class
