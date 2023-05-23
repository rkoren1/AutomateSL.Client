import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ILinkAccData } from '@shared/Models/bot.model';
import { UserService } from '@theme/widgets/user/user.service';
import { AccessCodePopupComponent } from './access-code-popup/access-code-popup.component';
import { BotSettingsPopupComponent } from './bot-settings-popup/bot-settings-popup.component';
import { DiscordSettingsPopupComponent } from './discord-settings-popup/discord-settings-popup.component';
import { ManageBotService } from './manage-bot.service';
import { StartupPopupComponent } from './startup-popup/startup-popup.component';
import { SubscriptionPopupComponent } from './subscription-popup/subscription-popup.component';

@Component({
  selector: 'app-manage-bot',
  templateUrl: './manage-bot.component.html',
  styleUrls: ['./manage-bot.component.scss'],
})
export class ManageBotComponent implements OnInit {
  botData: ILinkAccData = {
    id: -1,
    loginFirstName: '',
    loginSpawnLocation: '',
    loginRegion: '',
    imageId: '00000000-0000-0000-0000-000000000000',
    subscriptions: [
      { subscriptionStart: '', subscriptionEnd: '', package: { packageName: '', id: -1 } },
    ],
  };
  firstName: string;
  lastName: string;
  constructor(
    private route: ActivatedRoute,
    private manageBotService: ManageBotService,
    private dialog: MatDialog,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.firstName = this.route.snapshot.params.id.split('-')[0];
    this.lastName = this.route.snapshot.params.id.split('-')[1];
    this.getBotConfiguration(this.firstName, this.lastName);
  }
  private getBotConfiguration(firstName: string, lastName: string) {
    this.manageBotService.getBotConfiguration(firstName, lastName).subscribe(res => {
      this.botData = res;
      if (res.subscriptions.length === 0) {
        this.botData.subscriptions = [
          { subscriptionStart: '', subscriptionEnd: '', package: { packageName: '', id: -1 } },
        ];
      }
    });
  }

  startupPopup(botId: number) {
    const dialogRef = this.dialog.open(StartupPopupComponent);
  }
  botAccessCodePopup(botId: number) {
    const dialogRef = this.dialog.open(AccessCodePopupComponent);
  }
  discordSettingsPopup(botId: number) {
    const dialogRef = this.dialog.open(DiscordSettingsPopupComponent);
  }
  botSubscriptionPopup(botId: number) {
    const dialogRef = this.dialog
      .open(SubscriptionPopupComponent, {
        data: {
          packageId: this.botData.subscriptions[0].package.id,
          package: this.botData.subscriptions[0].package.packageName,
          botId,
        },
      })
      .afterClosed()
      .subscribe(res => {
        this.userService.updateLDollarBalance.next(true);
        this.getBotConfiguration(this.firstName, this.lastName);
      });
  }
  botSettingsPopup(botId: number) {
    const dialogRef = this.dialog.open(BotSettingsPopupComponent);
  }
}
