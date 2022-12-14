import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-bot',
  templateUrl: './manage-bot.component.html',
  styleUrls: ['./manage-bot.component.scss'],
})
export class ManageBotComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
  }
}
