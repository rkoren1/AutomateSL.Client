import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBotPopupComponent } from './add-bot-popup/add-bot-popup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef, public dialog: MatDialog) {}

  ngOnInit() {}

  addBot() {
    const dialogRef = this.dialog.open(AddBotPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
