import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-bot-popup',
  templateUrl: './add-bot-popup.component.html',
  styleUrls: ['./add-bot-popup.component.scss'],
})
export class AddBotPopupComponent implements OnInit {
  botNameValue = '';
  constructor() {}
  ngOnInit() {}
}
