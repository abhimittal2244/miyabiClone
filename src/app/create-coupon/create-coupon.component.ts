import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // @ts-ignore
    new FroalaEditor("#edit", {
      height: 200,
      width: 900
  })
}
}
