import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bots } from '@shared/Models/bot.model';
import { AddBotPopupComponent } from './add-bot-popup/add-bot-popup.component';
import { DashboardService } from './dashboard.service';
import { LinkAccToBotPopupComponent } from './link-acc-to-bot-popup/link-acc-to-bot-popup.component';

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
  linkAccToBot(botId: number) {
    this.dashboardService.getBotConfiguration(botId).subscribe(res => {
      const dialogRef = this.dialog.open(LinkAccToBotPopupComponent, {
        data: { botId, botConfiguration: res },
      });
    });

    /* dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    }); */
  }
  removeBot(botId: number) {
    this.dashboardService.removeBot(botId).subscribe(res => {
      if (res.success === true) this.getAllBots();
    });
  }
  startStopBot(botId: number, running: boolean) {
    if (running) {
      this.dashboardService.stopBot(botId).subscribe(res => {
        if (res.success === true) this.getAllBots();
      });
    } else {
      this.dashboardService.startBot(botId).subscribe(res => {
        if (res.success === true) this.getAllBots();
      });
    }
  }
}
