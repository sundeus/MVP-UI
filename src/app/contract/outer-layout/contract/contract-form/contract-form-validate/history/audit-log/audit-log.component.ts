import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.css']
})
export class AuditLogComponent implements OnInit {
  customtabledata: any[];   //table
  cols: any[];

  constructor() { } //end of constructor method

  ngOnInit(): void {
    this.customtabledata = [
      { "Component": "Lorem Ipsum", "User": "Lorem Ipsum", "Action": "Lorem Ipsum", "Operation": "Lorem Ipsum is simply dummy text of the printing and Orem ipsum", "Time": "Lorem Ipsum"},
      { "Component": "Lorem Ipsum", "User": "Lorem Ipsum", "Action": "Lorem Ipsum", "Operation": "Lorem Ipsum is simply dummy text of the printing and Orem ipsum", "Time": "Lorem Ipsum"},
      { "Component": "Lorem Ipsum", "User": "Lorem Ipsum", "Action": "Lorem Ipsum", "Operation": "Lorem Ipsum is simply dummy text of the printing and Orem ipsum", "Time": "Lorem Ipsum"},
      { "Component": "Lorem Ipsum", "User": "Lorem Ipsum", "Action": "Lorem Ipsum", "Operation": "Lorem Ipsum is simply dummy text of the printing and Orem ipsum", "Time": "Lorem Ipsum"},
      { "Component": "Lorem Ipsum", "User": "Lorem Ipsum", "Action": "Lorem Ipsum", "Operation": "Lorem Ipsum is simply dummy text of the printing and Orem ipsum", "Time": "Lorem Ipsum"},
      { "Component": "Lorem Ipsum", "User": "Lorem Ipsum", "Action": "Lorem Ipsum", "Operation": "Lorem Ipsum is simply dummy text of the printing and Orem ipsum", "Time": "Lorem Ipsum"},
      { "Component": "Lorem Ipsum", "User": "Lorem Ipsum", "Action": "Lorem Ipsum", "Operation": "Lorem Ipsum is simply dummy text of the printing and Orem ipsum", "Time": "Lorem Ipsum"},
      { "Component": "Lorem Ipsum", "User": "Lorem Ipsum", "Action": "Lorem Ipsum", "Operation": "Lorem Ipsum is simply dummy text of the printing and Orem ipsum", "Time": "Lorem Ipsum"},
      { "Component": "Lorem Ipsum", "User": "Lorem Ipsum", "Action": "Lorem Ipsum", "Operation": "Lorem Ipsum is simply dummy text of the printing and Orem ipsum", "Time": "Lorem Ipsum"},
      { "Component": "Lorem Ipsum", "User": "Lorem Ipsum", "Action": "Lorem Ipsum", "Operation": "Lorem Ipsum is simply dummy text of the printing and Orem ipsum", "Time": "Lorem Ipsum"},
      { "Component": "Lorem Ipsum", "User": "Lorem Ipsum", "Action": "Lorem Ipsum", "Operation": "Lorem Ipsum is simply dummy text of the printing and Orem ipsum", "Time": "Lorem Ipsum"},
      { "Component": "Lorem Ipsum", "User": "Lorem Ipsum", "Action": "Lorem Ipsum", "Operation": "Lorem Ipsum is simply dummy text of the printing and Orem ipsum", "Time": "Lorem Ipsum"},
      { "Component": "Lorem Ipsum", "User": "Lorem Ipsum", "Action": "Lorem Ipsum", "Operation": "Lorem Ipsum is simply dummy text of the printing and Orem ipsum", "Time": "Lorem Ipsum"},
      { "Component": "Lorem Ipsum", "User": "Lorem Ipsum", "Action": "Lorem Ipsum", "Operation": "Lorem Ipsum is simply dummy text of the printing and Orem ipsum", "Time": "Lorem Ipsum"},
      { "Component": "Lorem Ipsum", "User": "Lorem Ipsum", "Action": "Lorem Ipsum", "Operation": "Lorem Ipsum is simply dummy text of the printing and Orem ipsum", "Time": "Lorem Ipsum"},

];
    this.cols = [
      { field: 'Component', header: 'Component', width: '25%' },
      { field: 'User', header: 'User'},
      { field: 'Action', header: 'Action'},
      { field: 'Operation', header: 'Operation',  width: '35%'},
      { field: 'Time', header: 'Time'}
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

}  //end of export class
