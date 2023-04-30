import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Bot, IAddBot } from '@shared/Models/bot.model';
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
    private dashboardService: DashboardService,
    private router: Router
  ) {}

  allMyBots: Bot[];
  allSharedBots: Bot[];

  ngOnInit() {
    this.getAllBots();
  }

  getAllBots() {
    this.dashboardService.getBots().subscribe(res => {
      this.allMyBots = res.my;
      this.allSharedBots = res.shared;
      this.cd.detectChanges();
    });
  }

  addBot() {
    this.dashboardService.getSharedBots().subscribe(res => {
      const dialogRef = this.dialog.open(AddBotPopupComponent, { data: res });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          if (result.botType === 'my') {
            const reqBody: IAddBot = {
              slUserName: result.formValue.slUserName,
              loginPassword: result.formValue.slPassword,
              loginSpawnLocation: result.formValue.loginSpawnLocation,
              loginRegion: result.formValue.loginRegion,
            };
            this.dashboardService.addBot(reqBody).subscribe(res => {
              if (res.success) this.getAllBots();
            });
          } else if (result.botType === 'shared') {
            const reqBody = {
              id: result.formValue.sharedBotId,
            };
            this.dashboardService.linkSharedBotToUser(reqBody.id).subscribe(res => {
              if (res.success) this.getAllBots();
            });
          }
        }
      });
    });
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
  manageBot(loginName: string, loginLastName: string) {
    this.router.navigateByUrl('/dashboard/' + loginName + '-' + loginLastName);
  }
  refreshBot(botId: number) {
    this.dashboardService.refreshBotStatus(botId).subscribe(res => {
      this.getAllBots();
    });
  }
}
