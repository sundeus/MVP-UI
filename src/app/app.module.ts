import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
 //import  { MenubarModule} from './customprimengmodules/menubar/public_api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
// import {SidebarModule} from 'primeng/sidebar';
import {SidebarModule} from './customprimengmodules/sidebar/public_api';
//import {TieredMenuModule} from 'primeng/tieredmenu';

import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import {TableModule} from 'primeng/table';
import {TableModule} from './customprimengmodules/table/public_api';
import {ChartModule} from 'primeng/chart';


import {ToggleButtonModule} from 'primeng/togglebutton';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ListboxModule} from 'primeng/listbox';
import {TooltipModule} from 'primeng/tooltip';
import {DropdownModule} from 'primeng/dropdown';
import {EditorModule} from 'primeng/editor';
import {ScrollPanelModule} from 'primeng/scrollpanel';

import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';
import {ChipsModule} from 'primeng/chips';
import {CheckboxModule} from 'primeng/checkbox';

import {StepsModule} from 'primeng/steps';
import {CalendarModule} from 'primeng/calendar';
import {RadioButtonModule} from 'primeng/radiobutton';

import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {FileUploadModule} from 'primeng/fileupload';



import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {TabMenuModule} from 'primeng/tabmenu';

import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

import {PasswordModule} from 'primeng/password';
import { OuterLayoutComponent } from './contract/outer-layout/outer-layout.component';
import { DashboardComponent } from './contract/outer-layout/dashboard/dashboard.component';
import { SetupComponent } from './contract/outer-layout/setup/setup.component';
import { NotificationsComponent } from './contract/outer-layout/setup/notifications/notifications.component';
import { NotificationListComponent } from './contract/outer-layout/setup/notifications/notification-list/notification-list.component';
import { NotificationFormComponent } from './contract/outer-layout/setup/notifications/notification-form/notification-form.component';
import { ContractTypeComponent } from './contract/outer-layout/setup/contract-type/contract-type.component';
import { ContracttypeListComponent } from './contract/outer-layout/setup/contract-type/contracttype-list/contracttype-list.component';
import { ContracttypeFormComponent } from './contract/outer-layout/setup/contract-type/contracttype-form/contracttype-form.component';
import { ClausesComponent } from './contract/outer-layout/setup/clauses/clauses.component';
import { ClausesListComponent } from './contract/outer-layout/setup/clauses/clauses-list/clauses-list.component';
import { AddclauseFormComponent } from './contract/outer-layout/setup/clauses/addclause-form/addclause-form.component';
import { TemplatesComponent } from './contract/outer-layout/setup/templates/templates.component';
import { TemplatesListComponent } from './contract/outer-layout/setup/templates/templates-list/templates-list.component';
import { OrganisationDetailsComponent } from './contract/outer-layout/setup/organisation-details/organisation-details.component';
import { OrganisationdetailsFormComponent } from './contract/outer-layout/setup/organisation-details/organisationdetails-form/organisationdetails-form.component';
import { ContractComponent } from './contract/outer-layout/contract/contract.component';
import { ContractListComponent } from './contract/outer-layout/contract/contract-list/contract-list.component';
import { ContractFormComponent } from './contract/outer-layout/contract/contract-form/contract-form.component';
import { ContractFormContractTypeComponent } from './contract/outer-layout/contract/contract-form/contract-form-contract-type/contract-form-contract-type.component';
import { ContractFormEnterDataComponent } from './contract/outer-layout/contract/contract-form/contract-form-enter-data/contract-form-enter-data.component';
import { ContractFormContractTemplateComponent } from './contract/outer-layout/contract/contract-form/contract-form-contract-template/contract-form-contract-template.component';
import { ContractFormValidateComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/contract-form-validate.component';
import { SummaryComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/summary/summary.component';
import { DetailsComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/details/details.component';
import { TeamsComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/teams/teams.component';
import { SupportingDocComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/supporting-doc/supporting-doc.component';
import { ObligationsComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/obligations/obligations.component';
import { HistoryComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/history/history.component';
import { NotesComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/notes/notes.component';
import { ValidateClauseComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/validate-clause/validate-clause.component';
import { AuditLogComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/history/audit-log/audit-log.component';
import { VersionComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/history/version/version.component';
import { ApproverComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/teams/approver/approver.component';
import { ReviewerComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/teams/reviewer/reviewer.component';
import { UserMgmtComponent } from './contract/outer-layout/user-mgmt/user-mgmt.component';
import { UsersComponent } from './contract/outer-layout/user-mgmt/users/users.component';
import { RoleComponent } from './contract/outer-layout/user-mgmt/role/role.component';
import { UsersListComponent } from './contract/outer-layout/user-mgmt/users/users-list/users-list.component';
import { UserFormComponent } from './contract/outer-layout/user-mgmt/users/user-form/user-form.component';
import { RoleListComponent } from './contract/outer-layout/user-mgmt/role/role-list/role-list.component';
import { RoleFormComponent } from './contract/outer-layout/user-mgmt/role/role-form/role-form.component';
import { RolesComponent } from './contract/outer-layout/user-mgmt/role/role-form/roles/roles.component';
import { PermissionsComponent } from './contract/outer-layout/user-mgmt/role/role-form/permissions/permissions.component';
import { SearchResultComponent } from './contract/outer-layout/search-result/search-result.component';
import { TieredMenuModule } from './customprimengmodules/tieredmenu/tieredmenu';





// import {MenuItem} from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    OuterLayoutComponent,
    DashboardComponent,
    SetupComponent,
    NotificationsComponent,
    NotificationListComponent,
    NotificationFormComponent,
    ContractTypeComponent,
    ContracttypeListComponent,
    ContracttypeFormComponent,
    ClausesComponent,
    ClausesListComponent,
    AddclauseFormComponent,
    TemplatesComponent,
    TemplatesListComponent,
    OrganisationDetailsComponent,
    OrganisationdetailsFormComponent,
    ContractComponent,
    ContractListComponent,
    ContractFormComponent,
    ContractFormContractTypeComponent,
    ContractFormEnterDataComponent,
    ContractFormContractTemplateComponent,
    ContractFormValidateComponent,
    SummaryComponent,
    DetailsComponent,
    TeamsComponent,
    SupportingDocComponent,
    ObligationsComponent,
    HistoryComponent,
    NotesComponent,
    ValidateClauseComponent,
    AuditLogComponent,
    VersionComponent,
    ApproverComponent,
    ReviewerComponent,
    UserMgmtComponent,
    UsersComponent,
    RoleComponent,
    UsersListComponent,
    UserFormComponent,
    RoleListComponent,
    RoleFormComponent,
    RolesComponent,
    PermissionsComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SearchResultComponent
  ],
  imports: [
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
    PasswordModule

    // MenuItem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
