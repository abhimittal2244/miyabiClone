import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AuditLogsComponent } from './audit-logs/audit-logs.component';
import { CouponsComponent } from './coupons/coupons.component';
import { CourseComponent } from './course/course.component';
import { FaqComponent } from './faq/faq.component';
import { ManageMarathonComponent } from './manage-marathon/manage-marathon.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {
    path:'admin-user',
    component: AdminUserComponent
  },
  {
    path:'create-user',
    component: CreateUserComponent
  },
  {
    path: 'audit-logs',
    component: AuditLogsComponent
  },
  {
    path: 'coupons',
    component: CouponsComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'manage-marathon',
    component: ManageMarathonComponent
  },
  {
    path: 'manage-user',
    component: ManageUsersComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    component: AdminUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
