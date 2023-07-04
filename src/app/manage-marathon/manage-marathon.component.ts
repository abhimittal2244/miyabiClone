import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-marathon',
  templateUrl: './manage-marathon.component.html',
  styleUrls: ['./manage-marathon.component.css']
})
export class ManageMarathonComponent {
  list = [
    {
      marathonName: "FYD",
      view: "URL List",
      tenure: "21",
      description: "description will be provided soon",
      image: "byte image here",
      startDate: "21-06-2023",
      action: "will be provided soon",
      copyMarathonUrl: "copy URL here",
      copyGiftUrl: "copy URL here"
    }
  ]
}
