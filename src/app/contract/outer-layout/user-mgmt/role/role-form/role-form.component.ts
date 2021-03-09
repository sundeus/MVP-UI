import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {
  items2: MenuItem[];
  activeItem: MenuItem;

  constructor() { }  //end of constructor()_method

  ngOnInit(): void {
    this.items2 = [
      {label: 'Role', icon: 'pi pi-fw pi-chart-bar', routerLink:'/app/usermgmt/role/form/createrole'},
      {label: 'Permissions', icon: 'pi pi-fw pi-calendar', routerLink:'/app/usermgmt/role/form/permission'}
  ];
  this.activeItem = this.items2[0];
  } //end of ngOnit()_method

} //end of export class
