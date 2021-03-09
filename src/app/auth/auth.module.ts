import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ContractRoutingModule } from '../contract/contract-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar/menubar';
import { InputTextModule } from 'primeng/inputtext/inputtext';
import { ButtonModule } from 'primeng/button/button';
import { SidebarModule } from '../customprimengmodules/sidebar/sidebar';
import { TieredMenuModule } from 'primeng/tieredmenu/tieredmenu';
import { CardModule } from 'primeng/card/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table/table';
import { ChartModule } from 'primeng/chart/chart';
import { ToggleButtonModule } from 'primeng/togglebutton/public_api';
import { MultiSelectModule } from 'primeng/multiselect/public_api';
import { InputTextareaModule } from 'primeng/inputtextarea/public_api';
import { ListboxModule } from 'primeng/listbox/listbox';
import { TooltipModule } from 'primeng/tooltip/tooltip';
import { DropdownModule } from 'primeng/dropdown/dropdown';
import { EditorModule } from 'primeng/editor/editor';
import { ScrollPanelModule } from 'primeng/scrollpanel/public_api';
import { TabViewModule } from 'primeng/tabview/tabview';
import { AccordionModule } from 'primeng/accordion/accordion';
import { ChipsModule } from 'primeng/chips/chips';
import { CheckboxModule } from 'primeng/checkbox/checkbox';
import { StepsModule } from 'primeng/steps/steps';
import { CalendarModule } from 'primeng/calendar/calendar';
import { RadioButtonModule } from 'primeng/radiobutton/public_api';
import { PanelModule } from 'primeng/panel/panel';
import { DialogModule } from 'primeng/dialog/dialog';
import { InputNumberModule } from 'primeng/inputnumber/public_api';
import { InputMaskModule } from 'primeng/inputmask/inputmask';
import { FileUploadModule } from 'primeng/fileupload/fileupload';
import { TabMenuModule } from 'primeng/tabmenu/tabmenu';
import { PasswordModule } from 'primeng/password/password';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,CommonModule,
    ContractRoutingModule,
    BrowserModule,
    AppRoutingModule,
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
  ]
})
export class AuthModule { }
