import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ILinkAccData } from '@shared/Models/bot.model';
import { LinkAccToBotPopupComponent } from './link-acc-to-bot-popup/link-acc-to-bot-popup.component';
import { ManageBotService } from './manage-bot.service';

@Component({
  selector: 'app-manage-bot',
  templateUrl: './manage-bot.component.html',
  styleUrls: ['./manage-bot.component.scss'],
})
export class ManageBotComponent implements OnInit {
  botData: ILinkAccData = {
    loginFirstName: '',
    loginSpawnLocation: '',
    loginRegion: '',
  };
  botId: number;
  constructor(
    private route: ActivatedRoute,
    private manageBotService: ManageBotService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.botId = this.route.snapshot.params.id;
    this.manageBotService.getBotConfiguration(this.botId).subscribe(res => {
      this.botData = res;
      console.log(res);
    });
  }
  startupPopup(botId: number) {
    const dialogRef = this.dialog.open(LinkAccToBotPopupComponent);
  }
  botAccessCodePopup(botId: number) {}
  botAccountSettingsPopup(botId: number) {}
  botSettingsPopup(botId: number) {}
}
