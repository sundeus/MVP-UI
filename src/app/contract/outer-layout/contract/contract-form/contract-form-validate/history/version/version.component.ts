import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {
  customtabledata: any[];   //table
  cols: any[];
  constructor() { }  //end of constructor method

  ngOnInit(): void {
    this.customtabledata = [
      { "Version": "Lorem Ipsum", "Created/Updated By": "Lorem Ipsum", "Created/Updated On": "Lorem Ipsum"},
      { "Version": "Lorem Ipsum", "Created/Updated By": "Lorem Ipsum", "Created/Updated On": "Lorem Ipsum"},
      { "Version": "Lorem Ipsum", "Created/Updated By": "Lorem Ipsum", "Created/Updated On": "Lorem Ipsum"},
      { "Version": "Lorem Ipsum", "Created/Updated By": "Lorem Ipsum", "Created/Updated On": "Lorem Ipsum"},
      { "Version": "Lorem Ipsum", "Created/Updated By": "Lorem Ipsum", "Created/Updated On": "Lorem Ipsum"},
      { "Version": "Lorem Ipsum", "Created/Updated By": "Lorem Ipsum", "Created/Updated On": "Lorem Ipsum"},
      { "Version": "Lorem Ipsum", "Created/Updated By": "Lorem Ipsum", "Created/Updated On": "Lorem Ipsum"},
      { "Version": "Lorem Ipsum", "Created/Updated By": "Lorem Ipsum", "Created/Updated On": "Lorem Ipsum"},
      { "Version": "Lorem Ipsum", "Created/Updated By": "Lorem Ipsum", "Created/Updated On": "Lorem Ipsum"},
      { "Version": "Lorem Ipsum", "Created/Updated By": "Lorem Ipsum", "Created/Updated On": "Lorem Ipsum"},
      { "Version": "Lorem Ipsum", "Created/Updated By": "Lorem Ipsum", "Created/Updated On": "Lorem Ipsum"},
      { "Version": "Lorem Ipsum", "Created/Updated By": "Lorem Ipsum", "Created/Updated On": "Lorem Ipsum"},
      { "Version": "Lorem Ipsum", "Created/Updated By": "Lorem Ipsum", "Created/Updated On": "Lorem Ipsum"},
      { "Version": "Lorem Ipsum", "Created/Updated By": "Lorem Ipsum", "Created/Updated On": "Lorem Ipsum"},
      { "Version": "Lorem Ipsum", "Created/Updated By": "Lorem Ipsum", "Created/Updated On": "Lorem Ipsum"}

];
    this.cols = [
      { field: 'col1', header: 'Version'},
      { field: 'col2', header: 'Created/Updated By'},
      { field: 'col3', header: 'Created/Updated On'}
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
