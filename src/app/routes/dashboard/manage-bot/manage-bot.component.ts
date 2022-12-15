import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILinkAccData } from '@shared/Models/bot.model';
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
  constructor(private route: ActivatedRoute, private manageBotService: ManageBotService) {}

  ngOnInit() {
    this.manageBotService.getBotConfiguration(this.route.snapshot.params.id).subscribe(res => {
      this.botData = res;
      console.log(res);
    });
  }
}
