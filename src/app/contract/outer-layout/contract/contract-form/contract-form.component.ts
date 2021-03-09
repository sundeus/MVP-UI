import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';
// import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class ContractFormComponent implements OnInit {
  items: MenuItem[];
 

  constructor() { }   //end bracket of Constructor() Method

  ngOnInit(): void {
    this.items = [
      {label: 'Step 1'},
      {label: 'Step 2'},
      {label: 'Step 3'},
      {label: 'Step 4'},
      {label: 'Step 5'},
      {label: 'Step 6'}
  ];
//     this.items = [{
//       label: 'Personal',
//       command: (event: any) => {
//           this.activeIndex = 0;
//           this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label});
//       }
//   },
//   {
//       label: 'Seat',
//       command: (event: any) => {
//           this.activeIndex = 1;
//           this.messageService.add({severity:'info', summary:'Seat Selection', detail: event.item.label});
//       }
//   },
//   {
//       label: 'Payment',
//       command: (event: any) => {
//           this.activeIndex = 2;
//           this.messageService.add({severity:'info', summary:'Pay with CC', detail: event.item.label});
//       }
//   },
//   {
//       label: 'Confirmation',
//       command: (event: any) => {
//           this.activeIndex = 3;
//           this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label});
//       }
//   }
// ];   //end of items_array

  }  //end bracket of ngOnInit():void Method

}   // end bracket of export class
