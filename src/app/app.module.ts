import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { FooterComponent } from './footer/footer.component';
import { AuditLogsComponent } from './audit-logs/audit-logs.component';
import { CouponsComponent } from './coupons/coupons.component';
import { CourseComponent } from './course/course.component';
import { FaqComponent } from './faq/faq.component';
import { ManageMarathonComponent } from './manage-marathon/manage-marathon.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    HeaderComponent,
    AdminUserComponent,
    FooterComponent,
    AuditLogsComponent,
    CouponsComponent,
    CourseComponent,
    FaqComponent,
    ManageMarathonComponent,
    ManageUsersComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
