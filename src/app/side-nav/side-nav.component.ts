import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  data:boolean=true;
  list = [
    {
      name: "Admin User",
      icon: "fa fa-user mr-3",
      link: "admin-user"
    },
    {
      name: "App Settings",
      icon: "fa fa-map mr-3",
      link: "app-setting"
    },
    {
      name: "Audit Logs",
      icon: "fa fa-history mr-3",
      link: "audit-logs"
    },
    {
      name: "Contest",
      icon: "fa fa-trophy mr-3",
      link: "admin-user"
    },
    {
      name: "Contest Rules",
      icon: "fa fa-trophy mr-3",
      link: "admin-user"
    },
    {
      name: "Coupons",
      icon: "fa fa-gift mr-3",
      link: "coupons"
    },
    {
      name: "Course",
      icon: "fas fa-book-reader mr-3",
      link: "course"
    },
    {
      name: "Create Coupons",
      icon: "fas fa-gift mr-3",
      link: "create-coupon"
    },
    {
      name: "Dashboard",
      icon: "fa fa-pie-chart mr-3",
      link: "dashboard"
    },
    {
      name: "Day Category",
      icon: "fa fa-list-alt mr-3",
      link: "admin-user"
    },
    {
      name: "Exercise",
      icon: "fa fa-child mr-3",
      link: "admin-user"
    },
    {
      name: "FAQ",
      icon: "fa fa-question-circle mr-3",
      link: "faq"
    },
    {
      name: "Feedback",
      icon: "fa fa-comments-o mr-3",
      link: "admin-user"
    },
    {
      name: "Great Extension",
      icon: "fa fa-list mr-3",
      link: "admin-user"
    },
    {
      name: "Gx Course",
      icon: "fas fa-book-reader mr-3",
      link: "admin-user"
    },
    {
      name: "Manage Comments",
      icon: "fa fa-comments mr-3",
      link: "admin-user"
    },
    {
      name: "Manage Extension",
      icon: "fa fa-list mr-3",
      link: "admin-user"
    },
    {
      name: "Manage Marathon",
      icon: "fa fa-tasks mr-3",
      link: "manage-marathon"
    },
    {
      name: "Manage Users",
      icon: "fa fa-user mr-3",
      link: "manage-user"
    },
    {
      name: "Modules",
      icon: "fa fa-bars mr-3",
      link: "admin-user"
    },
    {
      name: "Multi-Error",
      icon: "fa fa-exclamation-triangle mr-3",
      link: "admin-user"
    },
    {
      name: "Multi-Language",
      icon: "fa fa-language mr-3",
      link: "admin-user"
    },
    {
      name: "Notifications",
      icon: "fa fa-bell mr-3",
      link: "admin-user"
    },
    {
      name: "Order",
      icon: "fas fa-truck mr-3",
      link: "admin-user"
    },
    {
      name: "Profile",
      icon: "fa fa-user mr-3",
      link: "admin-user"
    },
    {
      name: "Revenue",
      icon: "fa-solid fa-money-bill",
      link: "admin-user"
    },
    {
      name: "User Session Logs",
      icon: "fas fa-location-arrow mr-3",
      link: "admin-user"
    },
    {
      name: "User Privilege",
      icon: "fas fa-user-secret mr-3",
      link: "admin-user"
    },
    {
      name: "Log Out",
      icon: "fa fa-sign-out mr-3",
      link: "admin-user"
    }
  ]

  changeDesign()
  {
  }
}
