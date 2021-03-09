import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  displayModal: boolean;
  items3: MenuItem[];
  value1: number;

  constructor() { } //end of constructor method

  ngOnInit(): void {
    this.items3 = [
      {label: 'Reviewer', icon: 'pi pi-fw pi-file', routerLink:'/app/contract/form/step4/teams/reviewer'},
      {label: 'Approver', icon: 'pi pi-fw pi-tags', routerLink:'/app/contract/form/step4/teams/approver'}
];
  } //end of ngOnInit method

  showModalDialog() {
    this.displayModal = true;
}  //modal_dialogbox

}  //end of export class
