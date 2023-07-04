import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  list = [
    {
      question: "Java Enterprise Course good to start for beginners",
      answer: "yes",
      tags: "#java, #courses, #beginners",
      action: "valid"
    }
  ]
}
