import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-organisation-details',
  templateUrl: './organisation-details.component.html',
  styleUrls: ['./organisation-details.component.css']
})
export class OrganisationDetailsComponent implements OnInit {
  countries: SelectItem[];
  selectedCounty1: string;
  value1: number;   //zip code
  value2: number = 100; 
  value3: number= 100; 
  value4: string;
  startdate: Date;
  enddate: Date;
  // public isDisabled = true;
  // uploadedFiles: any[] = [];
  // link: string = "blob:http://localhost:4200/d5d4fc15-fbef-4090-aedf-3fff0f71b647";


  constructor() {
    this.countries = [
      {label: 'India', value: 'India'},
      {label: 'Austria', value: 'Austria'},
      {label: 'Bangladesh', value: 'Bangladesh'},
      {label: 'Brazil', value: 'Brazil'},
      {label: 'Russia', value: 'Russia'},
      {label: 'Iceland', value: 'Iceland'},
      {label: 'Japan', value: 'Japan'},
      {label: 'Korea', value: 'Korea'},
      {label: 'Libya', value: 'Libya'}
  ];
   }
  
  ngOnInit(): void {
}  //end bracket of ngOnit() Method

// myUploader(event) {
//   event.files == files to upload
//   console.log("hi Swapna");
//   console.log(event);
//   this.link= event.currentFiles[0].objectURL.changingThisBreaksApplicationSecurity;
// }
// let loadFile = function(event) {
// 	let image = document.getElementById('output');
// 	image.src = URL.createObjectURL(event.target.files[0]);
// };

} //end bracket of export class Method
