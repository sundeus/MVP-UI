import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { OuterLayoutComponent } from './outer-layout/outer-layout.component';
import { DashboardComponent } from './outer-layout/dashboard/dashboard.component';
import { SetupComponent } from './outer-layout/setup/setup.component';
import { NotificationsComponent } from './outer-layout/setup/notifications/notifications.component';
import { NotificationListComponent } from './outer-layout/setup/notifications/notification-list/notification-list.component';
import { NotificationFormComponent } from './outer-layout/setup/notifications/notification-form/notification-form.component';
import { ContractTypeComponent } from './outer-layout/setup/contract-type/contract-type.component';
import { ContracttypeListComponent } from './outer-layout/setup/contract-type/contracttype-list/contracttype-list.component';
import { ContracttypeFormComponent } from './outer-layout/setup/contract-type/contracttype-form/contracttype-form.component';
import { ClausesComponent } from './outer-layout/setup/clauses/clauses.component';
import { ClausesListComponent } from './outer-layout/setup/clauses/clauses-list/clauses-list.component';
import { AddclauseFormComponent } from './outer-layout/setup/clauses/addclause-form/addclause-form.component';
import { TemplatesComponent } from './outer-layout/setup/templates/templates.component';
import { TemplatesListComponent } from './outer-layout/setup/templates/templates-list/templates-list.component';
import { OrganisationDetailsComponent } from './outer-layout/setup/organisation-details/organisation-details.component';
import { OrganisationdetailsFormComponent } from './outer-layout/setup/organisation-details/organisationdetails-form/organisationdetails-form.component';
import { ContractComponent } from './outer-layout/contract/contract.component';
import { ContractListComponent } from './outer-layout/contract/contract-list/contract-list.component';
import { ContractFormComponent } from './outer-layout/contract/contract-form/contract-form.component';
import { ContractFormContractTypeComponent } from './outer-layout/contract/contract-form/contract-form-contract-type/contract-form-contract-type.component';
import { ContractFormEnterDataComponent } from './outer-layout/contract/contract-form/contract-form-enter-data/contract-form-enter-data.component';
import { ContractFormContractTemplateComponent } from './outer-layout/contract/contract-form/contract-form-contract-template/contract-form-contract-template.component';
import { ContractFormValidateComponent } from './outer-layout/contract/contract-form/contract-form-validate/contract-form-validate.component';

import { SummaryComponent } from './outer-layout/contract/contract-form/contract-form-validate/summary/summary.component';
import { DetailsComponent } from './outer-layout/contract/contract-form/contract-form-validate/details/details.component';
import { TeamsComponent } from './outer-layout/contract/contract-form/contract-form-validate/teams/teams.component';
import { SupportingDocComponent } from './outer-layout/contract/contract-form/contract-form-validate/supporting-doc/supporting-doc.component';
import { ObligationsComponent } from './outer-layout/contract/contract-form/contract-form-validate/obligations/obligations.component';
import { HistoryComponent } from './outer-layout/contract/contract-form/contract-form-validate/history/history.component';
import { NotesComponent } from './outer-layout/contract/contract-form/contract-form-validate/notes/notes.component';
import { ValidateClauseComponent } from './outer-layout/contract/contract-form/contract-form-validate/validate-clause/validate-clause.component';
import { AuditLogComponent } from './outer-layout/contract/contract-form/contract-form-validate/history/audit-log/audit-log.component';
import { VersionComponent } from './outer-layout/contract/contract-form/contract-form-validate/history/version/version.component';
import { ApproverComponent } from './outer-layout/contract/contract-form/contract-form-validate/teams/approver/approver.component';
import { ReviewerComponent } from './outer-layout/contract/contract-form/contract-form-validate/teams/reviewer/reviewer.component';
import { UserMgmtComponent } from './outer-layout/user-mgmt/user-mgmt.component';
import { UsersComponent } from './outer-layout/user-mgmt/users/users.component';
import { RoleComponent } from './outer-layout/user-mgmt/role/role.component';
import { UsersListComponent } from './outer-layout/user-mgmt/users/users-list/users-list.component';
import { UserFormComponent } from './outer-layout/user-mgmt/users/user-form/user-form.component';
import { RoleListComponent } from './outer-layout/user-mgmt/role/role-list/role-list.component';
import { RoleFormComponent } from './outer-layout/user-mgmt/role/role-form/role-form.component';
import { RolesComponent } from './outer-layout/user-mgmt/role/role-form/roles/roles.component';
import { PermissionsComponent } from './outer-layout/user-mgmt/role/role-form/permissions/permissions.component';
import { SearchResultComponent } from './outer-layout/search-result/search-result.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext/inputtext';
import { MenubarModule } from 'primeng/menubar/menubar';
import { ButtonModule } from 'primeng/button/button';
import { SidebarModule } from '../customprimengmodules/sidebar/sidebar';
import { TieredMenuModule } from '../customprimengmodules/tieredmenu/tieredmenu';
import { CardModule } from 'primeng/card/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from '../customprimengmodules/table/table';
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
  declarations: [
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
    SearchResultComponent
  ],
  imports: [
    CommonModule,
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
    PasswordModule
  ]
})
export class ContractModule { }
