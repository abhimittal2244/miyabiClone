import { Component, AfterViewInit } from '@angular/core';
import { auto } from '@popperjs/core';

@Component({
  selector: 'app-app-setting',
  templateUrl: './app-setting.component.html',
  styleUrls: ['./app-setting.component.css']
})
export class AppSettingComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // @ts-ignore
    new FroalaEditor("#edit", {
      // heightMin: a uto,
      height:auto,
      width: auto,
  })
}
}
