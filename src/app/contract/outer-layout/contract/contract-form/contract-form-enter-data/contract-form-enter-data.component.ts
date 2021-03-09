import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-contract-form-enter-data',
  templateUrl: './contract-form-enter-data.component.html',
  styleUrls: ['./contract-form-enter-data.component.css'],
})
export class ContractFormEnterDataComponent implements OnInit {
  checked2: boolean = true;
  contractowner: SelectItem[]; //dropdown1
  selectedOwner;
  string;
  signtypes: SelectItem[]; //dropdown2
  selectedSigntype1: string;
  date6: Date; //calender-Navigator

  cars: SelectItem[]; //datatype2_multiselect
  selectedCars1: string[] = [];
  value1: number = 42723; //datatype3_Number
  value11: number = 4250; //datatype5_Currency
  value2: number = 58151; //datatype6_decimal



  constructor() {
    this.contractowner = [
      { label: 'Sneha Sans', value: 'Sneha Sans' },
      { label: 'Swapna Jadhav', value: 'Swapna Jadhav' },
    ]; //dropdown1
    this.signtypes = [
      { label: 'Electronic', value: 'Electronic' },
      { label: 'Manual', value: 'Manual' },
    ]; //dropdown2

    this.cars = [
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Ford', value: 'Ford' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' },
    ]; //datatype2_multiselect
  } //end of construcor() method

  ngOnInit(): void {} //end of  ngOnInit()_void method
} //end of export class
