import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-notification-form',
  templateUrl: './notification-form.component.html',
  styleUrls: ['./notification-form.component.css']
})
export class NotificationFormComponent implements OnInit {
  notificationtypes: SelectItem[];
  selectednotitype1: string;
  contracttype: SelectItem[];
  triggerbasedon: SelectItem[];
  values2: string[];    //chip1
  values3: string[];    //chip2
  selectpreuser: SelectItem[];
  cctopreuser: SelectItem[];
  dragmetadatadalist: SelectItem[];
  selectedmetadata: string = 'Contract ID';     /*check with pushkar*/
  text1: string = '';        //Editor



  constructor() {
    this.notificationtypes = [
      {label: 'Action Based', value: 'Action Based'},
      {label: 'Event Based', value: 'Event Based'}
  ];    //  end of Notification_Type dropdownt1
    this.contracttype = [
   {label: 'NDA', value: 'NDA'},
    {label: 'SOW', value: 'SOW'},
    {label: 'MSA', value: 'MSA'},
    {label: 'Offer Letter', value: 'Offer Letter'}
 ];    //  end of Contract_Type_Multiselect1
 this.triggerbasedon = [
  {label: 'Approval Submission', value: 'Approval Submission'},
  {label: 'Review Submission', value: 'Review Submission'},
  {label: 'Approved', value: 'Approved'},
  {label: 'Sent for Signature', value: 'Sent for Signature'},
  {label: 'Completed Review', value: 'Completed Review'},
  {label: 'Declined review', value: 'Declined review'},
  {label: 'Completed Signature', value: 'Completed Signature'},
  {label: 'Expired', value: 'Expired'}
];    //  end of Trigeer_Multiselect2
this.selectpreuser = [
  {label: 'Current User', value: 'Current User'},
  {label: 'Previous User', value: 'Previous User'},
  {label: 'Next User', value: 'Next User'},
  {label: 'Owner', value: 'Owner'}
];   
 //  end of sendto_Multiselect3
this.cctopreuser = [
  {label: 'Current User', value: 'Current User'},
  {label: 'Previous User', value: 'Previous User'},
  {label: 'Next User', value: 'Next User'},
  {label: 'Owner', value: 'Owner'}
];   
 //  end of ccto_Multiselect4
this.dragmetadatadalist = [
  {label:'Contract ID', value:'Contract ID'},
  {label:'Contract Type', value:'Contract Type'},
  {label:'Contract Name', value:'Contract Name'},
  {label:'Contract Status', value:'Contract Status'},
  {label:'Created By', value:'Created On'},
  {label:'Expiry Date', value:'Expiry Date'},
  {label:'Action', value:'Action'},
  {label:'Contract ID', value:'Contract ID'},
  {label:'Contract Type', value:'Contract Type'},
  {label:'Contract Name', value:'Contract Name'},
  {label:'Contract Status', value:'Contract Status'},
  {label:'Created By', value:'Created On'},
  {label:'Expiry Date', value:'Expiry Date'},
  {label:'Action', value:'Action'},
  {label:'Contract ID', value:'Contract ID'},
  {label:'Contract Type', value:'Contract Type'},
  {label:'Contract Name', value:'Contract Name'},
  {label:'Contract Status', value:'Contract Status'},
  {label:'Created By', value:'Created On'},
  {label:'Expiry Date', value:'Expiry Date'},
  {label:'Action', value:'Action'}
];   //  end of dragmedatadalist

}   //  end of construcor() method

  ngOnInit(): void {
  }

}
