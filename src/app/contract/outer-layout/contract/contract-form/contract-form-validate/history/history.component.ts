import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  items2: MenuItem[];
  // activeItem: MenuItem;

  constructor() { } //end of constructor method

  ngOnInit(): void {
    this.items2 = [
      {label: 'Audit Log', icon: 'pi pi-fw pi-file', routerLink:'/app/contract/form/step4/history/auditlog'},
      {label: 'Version', icon: 'pi pi-fw pi-tags', routerLink:'/app/contract/form/step4/history/version'}
];
  }  //end of ngOnInit method

} //end of export class
