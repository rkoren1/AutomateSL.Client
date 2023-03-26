import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ILinkAccData } from '@shared/Models/bot.model';
import { AccessCodePopupComponent } from './access-code-popup/access-code-popup.component';
import { AccountSettingsPopupComponent } from './account-settings-popup/account-settings-popup.component';
import { BotSettingsPopupComponent } from './bot-settings-popup/bot-settings-popup.component';
import { ManageBotService } from './manage-bot.service';
import { StartupPopupComponent } from './startup-popup/startup-popup.component';

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
  };
  constructor(
    private route: ActivatedRoute,
    private manageBotService: ManageBotService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const firstName = this.route.snapshot.params.id.split('-')[0];
    const LastName = this.route.snapshot.params.id.split('-')[1];
    this.manageBotService.getBotConfiguration(firstName, LastName).subscribe(res => {
      this.botData = res;
    });
  }
  startupPopup(botId: number) {
    const dialogRef = this.dialog.open(StartupPopupComponent);
  }
  botAccessCodePopup(botId: number) {
    const dialogRef = this.dialog.open(AccessCodePopupComponent);
  }
  botAccountSettingsPopup(botId: number) {
    const dialogRef = this.dialog.open(AccountSettingsPopupComponent);
  }
  botSettingsPopup(botId: number) {
    const dialogRef = this.dialog.open(BotSettingsPopupComponent);
  }
}
