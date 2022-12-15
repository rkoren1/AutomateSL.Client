import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-code-popup',
  templateUrl: './access-code-popup.component.html',
  styleUrls: ['./access-code-popup.component.scss'],
})
export class AccessCodePopupComponent implements OnInit {
  accessCodeValue = 'test';
  constructor() {}

  ngOnInit() {}
  confirm() {}
}
