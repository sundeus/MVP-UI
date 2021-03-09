import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-addclause-form',
  templateUrl: './addclause-form.component.html',
  styleUrls: ['./addclause-form.component.css']
})
export class AddclauseFormComponent implements OnInit {
  contracttypes: SelectItem[];    //dropdown1
  selectedCtype1: string;
  languages: SelectItem[];    //dropdown2
  selectedLanguage1: string;
  options: any[] = [];         //horizontal checkboxes
  taggedtemplates: any[];            //table
  cols: any[];

  constructor() { 
    this.contracttypes = [
      {label: 'NDA', value: 'NDA'},
      {label: 'MSA', value: 'MSA'},
      {label: 'Offer Letter', value: 'Offer Letter'},
      {label: 'LA', value: 'LA'}
  ];   //dropdown1_ContractType_end
  this.languages = [
    {label: 'English', value: 'English'},
    {label: 'Hindi', value: 'Hindi'},
    {label: 'Marathi', value: 'Marathi'},
    {label: 'Sanskrit', value: 'Sanskrit'}
];   //dropdown2_languages_end

  }    //end of construcor() method

  ngOnInit(): void {
    this.taggedtemplates = [
      { "Sr #": "1","Subject": "Template 1" },
      { "Sr #": "2","Subject": "Template 2" },
      { "Sr #": "3","Subject": "Template 3" },
      { "Sr #": "4","Subject": "Template 4" }
];
  this.cols = [
    { field: 'Sr #', header: 'Sr #' },
    { field: 'Subject', header: 'Subject' }
];
  }  //end of  ngOnInit()_void method

}    //end of export class 
