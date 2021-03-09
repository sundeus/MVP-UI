import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  contracttypes: SelectItem[];    //dropdown1
  selectedCtype1: string;
  contractstatus: SelectItem[]; //dropdwon2
  selectedCstatus: string;
  category: SelectItem[];  //dropdown3
  selectedCategory: string;
  ttypes: SelectItem[];  //dropdown4
  selectedTtype: string;
  obtypes: SelectItem[];
  selectedObtype: string;
  languages: SelectItem[];    //dropdown3
  selectedLanguage1: string;
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

   } //end of constructor() method

  ngOnInit(): void {
  } // end of ngOnInit()_method

} //end of export class
