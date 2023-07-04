import { Component } from '@angular/core';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent {
  list = [
    {
      name: "Abhi"
    },
    {
      name: "Deepak"
    },
    {
      name: "Madhav"
    },
    {
      name: "ravi"
    }
  ]

  logs = [
    {
      email: "no-mail@gmail.com",
      coupon: "SAVE50",
      createdDate:"20-06-2003",
      discount: 100,
      discountType: "currency",
      marathonName:  "FMD",
      orderNumber: "677880",
      numberOfUses: 20,
      counsumedCount: 13,
      valid: false
    }
  ]
}
