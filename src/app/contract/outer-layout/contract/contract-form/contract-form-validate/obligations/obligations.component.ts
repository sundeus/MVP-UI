import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { SortEvent } from 'primeng/api';


@Component({
  selector: 'app-obligations',
  templateUrl: './obligations.component.html',
  styleUrls: ['./obligations.component.css']
})
export class ObligationsComponent implements OnInit {
  entitlements: SelectItem[];   //dropdwon_1
  selectedEntitle1: string;   
  timelines: SelectItem[];  //dropdown_2
  selectedTime1: string;
  frequencys: SelectItem[];  //dropdown_3
  selectedFreq1: string;
  datefrom: Date;  //calender
  dateto: Date;    //calender
  approvals: SelectItem[];  //dropdown_4
  selectedApproval1: string;
  notices: SelectItem[];  //dropdown_5
  selectedNotice1: string;
  customtabledata: any[];   //table
  cols: any[];

  constructor() {
    this.entitlements = [
      {label: 'Entitlement 1', value: 'E1'},
      {label: 'Entitlement 2', value: 'E2'},
      {label: 'Entitlement 3', value: 'E3'},
      {label: 'Entitlement 4', value: 'E4'},
      {label: 'Entitlement 5', value: 'E5'}
  ];  //Dropdown_1
  this.timelines = [
    {label: 'TimeLine 1', value: 'TL1'},
    {label: 'TimeLine 2', value: 'TL2'},
    {label: 'TimeLine 3', value: 'TL3'},
    {label: 'TimeLine 4', value: 'TL4'},
    {label: 'TimeLine 5', value: 'TL5'}
]; //dropdown_2
this.frequencys = [
  {label: 'Frequency 1', value: 'F1'},
  {label: 'Frequency 2', value: 'F2'},
  {label: 'Frequency 3', value: 'F3'},
  {label: 'Frequency 4', value: 'F4'},
  {label: 'Frequency 5', value: 'F5'}
];  //dropdown_3
this.approvals = [
  {label: 'Approval 1', value: 'A1'},
  {label: 'Approval 2', value: 'A2'},
  {label: 'Approval 3', value: 'A3'},
  {label: 'Approval 4', value: 'A4'},
  {label: 'Approval 5', value: 'A5'}
];  //dropdown_4
this.notices = [
  {label: 'Notice 1', value: 'N1'},
  {label: 'Notice 2', value: 'n2'},
  {label: 'Notice 3', value: 'N3'},
  {label: 'Notice 4', value: 'N4'},
  {label: 'Notice 5', value: 'N5'}
];  //dropdown_5

   }  //end constructor() method

  ngOnInit(): void {
    this.customtabledata = [
      { "Entitlement Type": "Legal Agreement", "Frequency": "Lorem Ipsum", "Valid From": "Lorem Ipsum", "Valid To": "Lorem Ipsum", "Email": "Swapnajadhav396@gmail.com", "Approval": "Lorem Ipsum", "Reminder": "Lorem Ipsum", "Status": "Lorem Ipsum"},
      { "Entitlement Type": "Legal Agreement", "Frequency": "Lorem Ipsum", "Valid From": "Lorem Ipsum", "Valid To": "Lorem Ipsum", "Email": "Swapnajadhav396@gmail.com", "Approval": "Lorem Ipsum", "Reminder": "Lorem Ipsum", "Status": "Lorem Ipsum"},
      { "Entitlement Type": "Legal Agreement", "Frequency": "Lorem Ipsum", "Valid From": "Lorem Ipsum", "Valid To": "Lorem Ipsum", "Email": "Swapnajadhav396@gmail.com", "Approval": "Lorem Ipsum", "Reminder": "Lorem Ipsum", "Status": "Lorem Ipsum"},
      { "Entitlement Type": "Legal Agreement", "Frequency": "Lorem Ipsum", "Valid From": "Lorem Ipsum", "Valid To": "Lorem Ipsum", "Email": "Swapnajadhav396@gmail.com", "Approval": "Lorem Ipsum", "Reminder": "Lorem Ipsum", "Status": "Lorem Ipsum"},
      { "Entitlement Type": "Legal Agreement", "Frequency": "Lorem Ipsum", "Valid From": "Lorem Ipsum", "Valid To": "Lorem Ipsum", "Email": "Swapnajadhav396@gmail.com", "Approval": "Lorem Ipsum", "Reminder": "Lorem Ipsum", "Status": "Lorem Ipsum"},
      { "Entitlement Type": "Legal Agreement", "Frequency": "Lorem Ipsum", "Valid From": "Lorem Ipsum", "Valid To": "Lorem Ipsum", "Email": "Swapnajadhav396@gmail.com", "Approval": "Lorem Ipsum", "Reminder": "Lorem Ipsum", "Status": "Lorem Ipsum"},
      { "Entitlement Type": "Legal Agreement", "Frequency": "Lorem Ipsum", "Valid From": "Lorem Ipsum", "Valid To": "Lorem Ipsum", "Email": "Swapnajadhav396@gmail.com", "Approval": "Lorem Ipsum", "Reminder": "Lorem Ipsum", "Status": "Lorem Ipsum"},
      { "Entitlement Type": "Legal Agreement", "Frequency": "Lorem Ipsum", "Valid From": "Lorem Ipsum", "Valid To": "Lorem Ipsum", "Email": "Swapnajadhav396@gmail.com", "Approval": "Lorem Ipsum", "Reminder": "Lorem Ipsum", "Status": "Lorem Ipsum"},
      { "Entitlement Type": "Legal Agreement", "Frequency": "Lorem Ipsum", "Valid From": "Lorem Ipsum", "Valid To": "Lorem Ipsum", "Email": "Swapnajadhav396@gmail.com", "Approval": "Lorem Ipsum", "Reminder": "Lorem Ipsum", "Status": "Lorem Ipsum"},
      { "Entitlement Type": "Legal Agreement", "Frequency": "Lorem Ipsum", "Valid From": "Lorem Ipsum", "Valid To": "Lorem Ipsum", "Email": "Swapnajadhav396@gmail.com", "Approval": "Lorem Ipsum", "Reminder": "Lorem Ipsum", "Status": "Lorem Ipsum"},
      { "Entitlement Type": "Legal Agreement", "Frequency": "Lorem Ipsum", "Valid From": "Lorem Ipsum", "Valid To": "Lorem Ipsum", "Email": "Swapnajadhav396@gmail.com", "Approval": "Lorem Ipsum", "Reminder": "Lorem Ipsum", "Status": "Lorem Ipsum"},
      { "Entitlement Type": "Legal Agreement", "Frequency": "Lorem Ipsum", "Valid From": "Lorem Ipsum", "Valid To": "Lorem Ipsum", "Email": "Swapnajadhav396@gmail.com", "Approval": "Lorem Ipsum", "Reminder": "Lorem Ipsum", "Status": "Lorem Ipsum"},
      { "Entitlement Type": "Legal Agreement", "Frequency": "Lorem Ipsum", "Valid From": "Lorem Ipsum", "Valid To": "Lorem Ipsum", "Email": "Swapnajadhav396@gmail.com", "Approval": "Lorem Ipsum", "Reminder": "Lorem Ipsum", "Status": "Lorem Ipsum"},
      { "Entitlement Type": "Legal Agreement", "Frequency": "Lorem Ipsum", "Valid From": "Lorem Ipsum", "Valid To": "Lorem Ipsum", "Email": "Swapnajadhav396@gmail.com", "Approval": "Lorem Ipsum", "Reminder": "Lorem Ipsum", "Status": "Lorem Ipsum"},
      { "Entitlement Type": "Legal Agreement", "Frequency": "Lorem Ipsum", "Valid From": "Lorem Ipsum", "Valid To": "Lorem Ipsum", "Email": "Swapnajadhav396@gmail.com", "Approval": "Lorem Ipsum", "Reminder": "Lorem Ipsum", "Status": "Lorem Ipsum"}

];
    this.cols = [
      { field: 'Entitlement Type', header: 'Entitlement Type',  width: '15%'},
      { field: 'Frequency', header: 'Frequency'},
      { field: 'Valid From', header: 'Valid From'},
      { field: 'Valid To', header: 'Valid To'},
      { field: 'Email', header: 'Email', width: '20%'},
      { field: 'Approval', header: 'Approval'},
      { field: 'Reminder', header: 'Reminder'},
      { field: 'Status', header: 'Status'},
      { field: 'image', header: 'Action', width: '8%'}
  ];
  }  //end of ngOnInit():void method
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
