import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bots } from '@shared/Models/bot.model';
import { AddBotPopupComponent } from './add-bot-popup/add-bot-popup.component';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor(
    private cd: ChangeDetectorRef,
    private dialog: MatDialog,
    private dashboardService: DashboardService
  ) {}

  allBots: [Bots];

  ngOnInit() {
    this.getAllBots();
  }

  getAllBots() {
    this.dashboardService.getBots().subscribe(res => {
      this.allBots = res;
      this.cd.detectChanges();
    });
  }

  addBot() {
    const dialogRef = this.dialog.open(AddBotPopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.dashboardService.addBot(result).subscribe(res => {
          this.getAllBots();
        });
    });
  }
}
