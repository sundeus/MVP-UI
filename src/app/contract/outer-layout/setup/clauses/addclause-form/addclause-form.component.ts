import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { ContractService } from 'src/app/contract/contract.service';
import { UserService } from 'src/app/shared/user.service';
import { Clauses } from 'src/app/shared/clauses.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-addclause-form',
  templateUrl: './addclause-form.component.html',
  styleUrls: ['./addclause-form.component.css']
})
export class AddclauseFormComponent implements OnInit {
  contracttypes: SelectItem[];    //dropdown1
  selectedCtype1: string;
  languages: SelectItem[];    //dropdown2
  // selectedLanguage1: string;
  options: any[] = [];         //horizontal checkboxes
  taggedtemplates: any[];            //table
  cols: any[];
  Clause:Clauses;   //Clause obj
  firstName:string;
  lastName:string;

  constructor(public contractService: ContractService, public userService: UserService,private router: Router,private route: ActivatedRoute) {
    this.Clause = new Clauses();  //clause obj
    this.contracttypes = [
      {label: 'NDA', value: 'NDA'},
      {label: 'MSA', value: 'MSA'},
      {label: 'Offer Letter', value: 'Offer Letter'},
      {label: 'LA', value: 'LA'}
  ];   //dropdown1_ContractType_end
  this.languages = [
    {label: 'English', value: '1'}
    // {label: 'Hindi', value: 'Hindi'},
    // {label: 'Marathi', value: 'Marathi'},
    // {label: 'Sanskrit', value: 'Sanskrit'}
];   //dropdown2_languages_end

  }    //end of constructor() method

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

  saveClause(){
    console.log(this.Clause);
    // this.Clause.createdBy = this.userService.loggedinUser.firstName+ " " + this.userService.loggedinUser.lastName;
    this.Clause.createdBy = this.firstName;
    this.Clause.createdBy = this.lastName;
    debugger;
    this.Clause.tenantId = this.userService.loggedinUser.tenantId;

    this.Clause.createdDate = new Date().toDateString();
    this.Clause.updatedDate = new Date().toDateString();
    this.Clause.isDeleted = false;
    alert('save cluase on clicked')
    this.contractService.createClauses(this.Clause).then((res)=>{
        console.log(res);
    })
  }

  // userModel = new this.userModel('clause1', 'this is first clause', 'just i have to check it')

}    //end of export class
