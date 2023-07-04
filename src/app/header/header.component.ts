import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  list = [
    {
      name: "Admin User",
      icon: "fa fa-user mr-3"
    },
    {
      name: "App Settings",
      icon: "fa fa-map mr-3"
    },
    {
      name: "Audit Logs",
      icon: "fa fa-history mr-3"
    },
    {
      name: "Contest",
      icon: "fa fa-trophy mr-3"
    },
    {
      name: "Contest Rules",
      icon: "fa fa-trophy mr-3"
    },
    {
      name: "Coupons",
      icon: "fa fa-gift mr-3"
    },
    {
      name: "Course",
      icon: "fas fa-book-reader mr-3"
    },
    {
      name: "Create Coupons",
      icon: "fas fa-gift mr-3"
    },
    {
      name: "Dashboard",
      icon: "fa fa-pie-chart mr-3"
    },
    {
      name: "Day Category",
      icon: "fa fa-list-alt mr-3"
    },
    {
      name: "Exercise",
      icon: "fa fa-child mr-3"
    },
    {
      name: "FAQ",
      icon: "fa fa-question-circle mr-3"
    },
    {
      name: "FAQ List",
      icon: "fa fa-question-circle mr-3"
    },
    {
      name: "FAQ Tags",
      icon: "fa fa-question-circle mr-3"
    },
    {
      name: "Feedback",
      icon: "fa fa-comments-o mr-3"
    },
    {
      name: "Great Extension",
      icon: "fa fa-list mr-3"
    },
    {
      name: "Gx Course",
      icon: "fas fa-book-reader mr-3"
    },
    {
      name: "Manage Comments",
      icon: "fa fa-comments mr-3"
    },
    {
      name: "Manage Extension",
      icon: "fa fa-list mr-3"
    },
    {
      name: "Manage Marathon",
      icon: "fa fa-tasks mr-3"
    },
    {
      name: "Manage Users",
      icon: "fa fa-user mr-3"
    },
    {
      name: "Modules",
      icon: "fa fa-bars mr-3"
    },
    {
      name: "Multi-Error",
      icon: "fa fa-exclamation-triangle mr-3"
    },
    {
      name: "Multi-Language",
      icon: "fa fa-language mr-3"
    },
    {
      name: "Notifications",
      icon: "fa fa-bell mr-3"
    },
    {
      name: "Order",
      icon: "fas fa-truck mr-3"
    },
    {
      name: "Profile",
      icon: "fa fa-user mr-3"
    },
    {
      name: "Revenue",
      icon: "fa-solid fa-money-bill"
    },
    {
      name: "User Session Logs",
      icon: "fas fa-location-arrow mr-3"
    },
    {
      name: "User Privilege",
      icon: "fas fa-user-secret mr-3"
    },
    {
      name: "Log Out",
      icon: "fa fa-sign-out mr-3"
    }
  ]

  changeDesign()
  {
  }
}
