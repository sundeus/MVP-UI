import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { SortEvent } from 'primeng/api';


@Component({
  selector: 'app-contracttype-form',
  templateUrl: './contracttype-form.component.html',
  styleUrls: ['./contracttype-form.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ContracttypeFormComponent implements OnInit {
  datatypes: SelectItem[];      //dropdown1
  selecteddatatype1: string;   //if needed to pushkar otherwise delete
  values1: string[];           //chips
  mastertypes: SelectItem[];   //dropdown2
  selectedmastertype1: string;
  linkmetadatas: SelectItem[];   //dropdown3
  selectedlinkmdata: string;
  inheritedlists: SelectItem[];  //dropdown4 
  selectedinheritedlist: string;
  inheritedfroms: SelectItem[];  //dropdown5
  selectedinheritedfrom: string;
  sectionnames: SelectItem[];          //dropdown6
  selectedSecname: string;
  checkoptions: any[] = [];   //checkboxs var
  customtabledata: any[];      // table1 var
  cols: any[];
  associationstages: SelectItem[];        //dropdown7 var
  selectedstage1: string;               //if needed to pushkar otherwise delete
  associationtypes: SelectItem[];        //dropdown8 var
  selectedtype1: string;                //if needed to pushkar otherwise delete
  selectedmandatory: string[] = [];     //checkbox mandatory
  Associationtabledata: any[];      // table2 var
  cols1: any[];
  
  constructor() {
    // dropdown_1 comp for DataType field
     this.datatypes = [
            {label: 'String', value: 'String'},
            {label: 'Dropdown', value: 'Dropdown'},
            {label: 'Multiselect Dropdown', value: 'Multiselect Dropdown'},
            {label: 'Numeric', value: 'Numeric'},
            {label: 'Date', value: 'Date'},
            {label: 'Boolean', value: 'Boolean'},
            {label: 'Text Area', value: 'Text Area'},
            {label: 'Rich Text Area', value: 'Rich Text Area'},
            {label: 'Decimal', value: 'Decimal'},
            {label: 'Currency', value: 'Currency'},
            {label: 'Master Data', value: 'Master Data'}
    ];
    this.mastertypes = [
      {label: '', value: ''},
      {label: '', value: ''},
      {label: '', value: ''}
];
    this.linkmetadatas = [
        {label: '', value: ''},
        {label: '', value: ''},
        {label: '', value: ''}
];
this.inheritedlists = [
  {label: '', value: ''},
  {label: '', value: ''},
  {label: '', value: ''}
];
this.inheritedfroms = [
    {label: '', value: ''},
    {label: '', value: ''},
    {label: '', value: ''}
];
this.sectionnames = [
  {label: 'Section A', value: 'Section A'},
  {label: 'Section B', value: 'Section B'},
  {label: 'Section C', value: 'Section C'},
  {label: 'Section D', value: 'Section D'},
  {label: 'Section E', value: 'Section E'}
];
this.associationstages = [
      {label: 'pre-requisite', value: 'pre-requisite'},
      {label: 'Before Signature Submission', value: 'Before Signature Submission'},
      {label: 'Before Approval Submission', value: 'Before Approval Submission'},
      {label: 'Anytime', value: 'Anytime'},
      {label: 'Post Signatures', value: 'Post Signatures'}
];
this.associationtypes = [
  {label: 'Contract Type', value: 'Contract Type'},
  {label: 'Document', value: 'Document'}
];
      
  }    //end-of-constructorMethod-bracket

  ngOnInit(): void {
    this.customtabledata = [
      {"Label": "Employee Name", "Default Value": "Swapna Jadhav", "Section Name": "Basic Details", "Sequence #": "1"},
      {"Label": "Employee Name", "Default Value": "Swapnali Raje", "Section Name": "Basic details", "Sequence #": "2"},
      {"Label": "Employee Name", "Default Value": "Sapna Jadhav", "Section Name": "Basic details", "Sequence #": "3"}
    ];
    this.cols = [
      { field: 'Label', header: 'Label' },
      { field: 'Default Value', header: 'Default Value'},
      { field: 'Section Name', header: 'Section Name'},
      { field: 'Sequence #', header: 'Sequence #'},
      { field: 'image', header: 'Action'}
  ];     // Table_1 endd
  this.Associationtabledata = [
    {"Association Name": "NDA", "Association Stage": "Pre-requsite", "Association Type": "Contract Type", "Association Record": "Bilateral NDA", "Mandatory": "Yes"},
    {"Association Name": "MSA", "Association Stage": "Anytime", "Association Type": "Contract Type", "Association Record": "Bilateral NDA", "Mandatory": "Yes"},
    {"Association Name": "Non-MSA", "Association Stage": "Before Signature Submission", "Association Type": "Contract Type", "Association Record": "Bilateral NDA", "Mandatory": "No"}
    // {"Association Name": "NDA", "Association Stage": "Pre-requsite", "Association Type": "Contract Type", "Association Record": "Bilateral NDA", "Mandatory": "Yes"},
    // {"Association Name": "MSA", "Association Stage": "Anytime", "Association Type": "Contract Type", "Association Record": "Bilateral NDA", "Mandatory": "Yes"},
    // {"Association Name": "Non-MSA", "Association Stage": "Before Signature Submission", "Association Type": "Contract Type", "Association Record": "Bilateral NDA", "Mandatory": "No"},
    // {"Association Name": "NDA", "Association Stage": "Pre-requsite", "Association Type": "Contract Type", "Association Record": "Bilateral NDA", "Mandatory": "Yes"},
    // {"Association Name": "MSA", "Association Stage": "Anytime", "Association Type": "Contract Type", "Association Record": "Bilateral NDA", "Mandatory": "Yes"},
    // {"Association Name": "Non-MSA", "Association Stage": "Before Signature Submission", "Association Type": "Contract Type", "Association Record": "Bilateral NDA", "Mandatory": "No"},
    // {"Association Name": "NDA", "Association Stage": "Pre-requsite", "Association Type": "Contract Type", "Association Record": "Bilateral NDA", "Mandatory": "Yes"},
    // {"Association Name": "MSA", "Association Stage": "Anytime", "Association Type": "Contract Type", "Association Record": "Bilateral NDA", "Mandatory": "Yes"},
    // {"Association Name": "Non-MSA", "Association Stage": "Before Signature Submission", "Association Type": "Contract Type", "Association Record": "Bilateral NDA", "Mandatory": "No"},
    // {"Association Name": "NDA", "Association Stage": "Pre-requsite", "Association Type": "Contract Type", "Association Record": "Bilateral NDA", "Mandatory": "Yes"},
    // {"Association Name": "MSA", "Association Stage": "Anytime", "Association Type": "Contract Type", "Association Record": "Bilateral NDA", "Mandatory": "Yes"},
    // {"Association Name": "Non-MSA", "Association Stage": "Before Signature Submission", "Association Type": "Contract Type", "Association Record": "Bilateral NDA", "Mandatory": "No"},
    // {"Association Name": "NDA", "Association Stage": "Pre-requsite", "Association Type": "Contract Type", "Association Record": "Bilateral NDA", "Mandatory": "Yes"},
    // {"Association Name": "MSA", "Association Stage": "Anytime", "Association Type": "Contract Type", "Association Record": "Bilateral NDA", "Mandatory": "Yes"},
    // {"Association Name": "Non-MSA", "Association Stage": "Before Signature Submission", "Association Type": "Contract Type", "Association Record": "Bilateral NDA", "Mandatory": "No"}
  ];
  this.cols1 = [
    { field: 'Association Name', header: 'Association Name' },
    { field: 'Association Stage', header: 'Association Stage'},
    { field: 'Association Type', header: 'Association Type'},
    { field: 'Association Record', header: 'Association Record'},
    { field: 'Mandatory', header: 'Mandatory'},
    { field: 'image', header: 'Action'}
];
}    // end bracket of ngOnInit():void Method
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
}   // end bracket of export class
