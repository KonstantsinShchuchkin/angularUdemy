import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css'],
})
export class SuccessMessageComponent implements OnInit {
  toggle = true;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.toggle = !this.toggle;
  }
}
