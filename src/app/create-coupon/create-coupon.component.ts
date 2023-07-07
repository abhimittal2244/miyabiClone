import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import { auto } from '@popperjs/core';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements AfterViewInit {
  flag:boolean=true;
  isHidden(){
    this.flag = !this.flag;
  }
  ngAfterViewInit(): void {
    // @ts-ignore
    new FroalaEditor("#edit", {
      heightMin:auto,
      heightMax:600,
      width: auto
  })
}
// @ts-ignore
// editor = new FroalaEditor('.selector', {}, function () {

//   // Call the method inside the initialized event.
  
//   editor.format.remove('strong', { class: 'foo' });
  
//   })
}
