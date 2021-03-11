import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { AuthRoutingModule } from './auth-routing.module';
import { ContractRoutingModule } from '../contract/contract-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from '../customprimengmodules/sidebar/sidebar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CardModule } from 'primeng/card';

import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { ChipsModule } from 'primeng/chips';
import { CheckboxModule } from 'primeng/checkbox';
import { StepsModule } from 'primeng/steps';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { FileUploadModule } from 'primeng/fileupload';
import { TabMenuModule } from 'primeng/tabmenu';
import { PasswordModule } from 'primeng/password';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent
    
  ],
  imports: [
    ReactiveFormsModule,
  CommonModule,
    AuthRoutingModule,CommonModule,
    ContractRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SidebarModule,
    TieredMenuModule,
    CardModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ChartModule,
    ToggleButtonModule,
    MultiSelectModule,
    InputTextareaModule,
    ListboxModule,
    TooltipModule,
    DropdownModule,
    EditorModule,
    ScrollPanelModule,
    TabViewModule,
    AccordionModule,
    ChipsModule,
    CheckboxModule,
    StepsModule,
    CalendarModule,
    RadioButtonModule,
    PanelModule,
    DialogModule,
    InputNumberModule,
    InputMaskModule,
    FileUploadModule,
    TabMenuModule,
    PasswordModule,

  ],
  providers:[],
  exports:[
  ]
})
export class AuthModule { }
