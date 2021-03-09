import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-contract-form-validate',
  templateUrl: './contract-form-validate.component.html',
  styleUrls: ['./contract-form-validate.component.css']
})
export class ContractFormValidateComponent implements OnInit {
  items1: MenuItem[];
  activeItem: MenuItem;
  constructor() { }  //end of constructor_method

  ngOnInit(): void {
    this.items1 = [
      {label: 'Summary', icon: 'pi pi-fw pi-file', routerLink:'/app/contract/form/step4/summary'},
      {label: 'Details', icon: 'pi pi-fw pi-tags', routerLink:'/app/contract/form/step4/details'},
      {label: 'Teams', icon: 'pi pi-fw pi-users', routerLink:'/app/contract/form/step4/teams'},
      {label: 'Clauses', icon: 'pi pi-fw pi-clone', routerLink:'/app/contract/form/step4/validateclause'},
      {label: 'Supporting Docs', icon: 'pi pi-fw pi-folder-open', routerLink:'/app/contract/form/step4/document'},
      {label: 'Obligations', icon: 'pi pi-fw pi-th-large', routerLink:'/app/contract/form/step4/obligations'},
      {label: 'History', icon: 'pi pi-fw pi-calendar', routerLink:'/app/contract/form/step4/history'},
      {label: 'Notes', icon: 'pi pi-fw pi-file', routerLink:'/app/contract/form/step4/notes'}
  ];
  }  //end of ngOnit() method

}  //end of export class 
