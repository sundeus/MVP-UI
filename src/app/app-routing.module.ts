import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

import { OuterLayoutComponent } from './contract/outer-layout/outer-layout.component';
import { DashboardComponent } from './contract/outer-layout/dashboard/dashboard.component';
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
import { ReviewerComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/teams/reviewer/reviewer.component';
import { ApproverComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/teams/approver/approver.component';
import { ValidateClauseComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/validate-clause/validate-clause.component';
import { SupportingDocComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/supporting-doc/supporting-doc.component';
import { ObligationsComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/obligations/obligations.component';
import { HistoryComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/history/history.component';
import { AuditLogComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/history/audit-log/audit-log.component';
import { VersionComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/history/version/version.component';
import { NotesComponent } from './contract/outer-layout/contract/contract-form/contract-form-validate/notes/notes.component';
import { SearchResultComponent } from './contract/outer-layout/search-result/search-result.component';
import { UserMgmtComponent } from './contract/outer-layout/user-mgmt/user-mgmt.component';
import { UsersComponent } from './contract/outer-layout/user-mgmt/users/users.component';
import { UsersListComponent } from './contract/outer-layout/user-mgmt/users/users-list/users-list.component';
import { UserFormComponent } from './contract/outer-layout/user-mgmt/users/user-form/user-form.component';
import { RoleComponent } from './contract/outer-layout/user-mgmt/role/role.component';
import { RoleListComponent } from './contract/outer-layout/user-mgmt/role/role-list/role-list.component';
import { RoleFormComponent } from './contract/outer-layout/user-mgmt/role/role-form/role-form.component';
import { RolesComponent } from './contract/outer-layout/user-mgmt/role/role-form/roles/roles.component';
import { PermissionsComponent } from './contract/outer-layout/user-mgmt/role/role-form/permissions/permissions.component';
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
import { from } from 'rxjs';


const routes: Routes = [
{path: '', redirectTo: '/login',pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'forgotpwd' , component: ForgotPasswordComponent},
  {
    path: 'app', component: OuterLayoutComponent,
    children:[
      { path : '', redirectTo: '/app/dashboard', pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'contract', component: ContractComponent,
      children: [
        { path: 'list', component: ContractListComponent },
        { path: 'form', component: ContractFormComponent,
        children: [
          { path: '' , redirectTo: 'step1', pathMatch: 'full'},
          { path: 'step1', component: ContractFormContractTypeComponent },
          { path: 'step2', component: ContractFormEnterDataComponent },
          { path: 'step3', component: ContractFormContractTemplateComponent },
          { path: 'step4', component: ContractFormValidateComponent,
          children: [
            { path: '', redirectTo: 'summary', pathMatch: 'full' },
            { path: 'summary', component: SummaryComponent },
            { path: 'details', component: DetailsComponent },
            { path: 'teams', component: TeamsComponent,
            children: [
              { path: '', redirectTo: 'reviewer', pathMatch: 'full' },
              { path: 'reviewer', component: ReviewerComponent },
              { path: 'approver', component: ApproverComponent },
            ]
           },
            { path: 'validateclause', component: ValidateClauseComponent },
            { path: 'document', component: SupportingDocComponent },
            { path: 'obligations', component: ObligationsComponent },
            { path: 'history', component: HistoryComponent,
            children: [
              { path: '', redirectTo: 'auditlog', pathMatch: 'full' },
              { path: 'auditlog', component: AuditLogComponent },
              { path: 'version', component: VersionComponent },
            ]
           },
            { path: 'notes', component: NotesComponent },
          ]
        },
        ]
       },
      ]
     },

     { path: 'search', component: SearchResultComponent },

     { path: 'usermgmt', component: UserMgmtComponent,
     children: [
      { path: 'users', component: UsersComponent,
      children: [
        { path: 'list', component: UsersListComponent },
        { path: 'form', component: UserFormComponent },
      ]
    },
      { path: 'role', component: RoleComponent,
      children: [
        { path: 'list', component: RoleListComponent },
        { path: 'form', component: RoleFormComponent,
        children: [
          { path: '', redirectTo: 'createrole', pathMatch: 'full' },
          { path: 'createrole', component: RolesComponent },
          { path: 'permission', component: PermissionsComponent },
        ]
       },
      ]
    },
     ]
     },

     { path: 'setup', component: SetupComponent ,
      children: [
        { path: 'notifications', component: NotificationsComponent,
        children: [
          { path: 'list', component: NotificationListComponent },
          { path: 'form', component: NotificationFormComponent },
        ]
      },
      { path: 'contract-type', component: ContractTypeComponent,
        children: [
          { path: 'list', component: ContracttypeListComponent },
          { path: 'form', component: ContracttypeFormComponent },
        ]
      },
      { path: 'clauses', component: ClausesComponent,
      children: [
        { path: 'list', component: ClausesListComponent },
        { path: 'create', component: AddclauseFormComponent },
        { path: 'editclause', component: AddclauseFormComponent },
      ]
    },
    { path: 'templates', component: TemplatesComponent,
    children: [
      { path: 'list', component: TemplatesListComponent },
    ]
  },
  { path: 'organisation-details', component: OrganisationDetailsComponent,
  children: [
    { path: 'form', component: OrganisationdetailsFormComponent },
   ]
  },
      ]
    },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
exports: [RouterModule]
})
export class AppRoutingModule { }
