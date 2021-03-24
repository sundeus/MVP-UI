import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { ContractService } from 'src/app/contract/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  selectedAlloptions: string[] = [];   //selectedall checkbox header
  checked: boolean = false;    //checkbox var
  customtabledata: any[];
  cols: any[];
  first = 0;
  rows = 10;
  constructor(public contractService:ContractService) { }    //end bracket of Constructor() Method

  ngOnInit(){
    // this.customtabledata = [
    //   {"Contract Name": "Non Disclosure Agreement", "Created Type": "", "Account Name": "111232", "Status": "Active", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "1.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Master Services Agreement", "Created Type": "", "Account Name": "111232", "Status": "Active", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "2.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Partnership Agreement", "Created Type": "", "Account Name": "111232", "Status": "Inactive", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "3.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Lease Agreement", "Created Type": "", "Account Name": "111232", "Status": "Active", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "4.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Sponsorship Agreement", "Created Type": "", "Account Name": "111232", "Status": "Active", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "5.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Vendor Agreement", "Created Type": "", "Account Name": "111232", "Status": "Active", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "6.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Non Disclosure Agreement", "Created Type": "", "Account Name": "111232", "Status": "Inactive", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "1.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Non Disclosure Agreement", "Created Type": "", "Account Name": "111232", "Status": "Active", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "1.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Non Disclosure Agreement", "Created Type": "", "Account Name": "111232", "Status": "Active", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "1.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Non Disclosure Agreement", "Created Type": "", "Account Name": "111232", "Status": "Active", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "1.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Non Disclosure Agreement", "Created Type": "", "Account Name": "111232", "Status": "Active", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "1.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Non Disclosure Agreement", "Created Type": "", "Account Name": "111232", "Status": "Active", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "1.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Non Disclosure Agreement", "Created Type": "", "Account Name": "111232", "Status": "Active", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "1.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Non Disclosure Agreement", "Created Type": "", "Account Name": "111232", "Status": "Active", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "1.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Non Disclosure Agreement", "Created Type": "", "Account Name": "111232", "Status": "Active", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "1.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Non Disclosure Agreement", "Created Type": "", "Account Name": "111232", "Status": "Active", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "1.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Non Disclosure Agreement", "Created Type": "", "Account Name": "111232", "Status": "Active", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "1.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Non Disclosure Agreement", "Created Type": "", "Account Name": "111232", "Status": "Active", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "1.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Non Disclosure Agreement", "Created Type": "", "Account Name": "111232", "Status": "Active", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "1.0", "Created By": "Jhon Doe", "Created On": "02/09/20"},
    //   {"Contract Name": "Non Disclosure Agreement", "Created Type": "", "Account Name": "111232", "Status": "Active", "Effective Date": "30/08/20", "Expiry Date": "30/09/21", "Version": "1.0", "Created By": "Jhon Doe", "Created On": "02/09/20"}
    // ];
    this.cols = [
      { field: 'Contract Name', header: 'Contract Name' },
      { field: 'Created Type', header: 'Contract Type'},
      { field: 'Account Name', header: 'Account Name'},
      { field: 'Status', header: 'Status'},
      { field: 'Effective Date', header: 'Effective Date'},
      { field: 'Expiry Date', header: 'Expiry Date'},
      { field: 'Created By', header: 'Created By'},
      { field: 'Created On', header: 'Created On'},
      { field: 'image', header: 'Action'}
  ];

  //Contract_List
  this.contractService.getAllContractsList().then(()=>{
    this.customtabledata = this.contractService.contractList;
  })
  }   //end bracket of ngOnInit():void Method
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

// Start pagination section code
 next() {
  this.first = this.first + this.rows;
}
prev() {
  this.first = this.first - this.rows;
}
reset() {
  this.first = 0;
}
isLastPage(): boolean {
  return this.first === (this.customtabledata.length - this.rows);
}
isFirstPage(): boolean {
  return this.first === 0;
}
// end pagination
}    // end bracket of export class
