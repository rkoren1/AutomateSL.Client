import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatChipsModule } from '@angular/material/chips';
import { AddBotPopupComponent } from './dashboard/add-bot-popup/add-bot-popup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccessCodePopupComponent } from './dashboard/manage-bot/access-code-popup/access-code-popup.component';
import { BotSettingsPopupComponent } from './dashboard/manage-bot/bot-settings-popup/bot-settings-popup.component';
import { ManageBotComponent } from './dashboard/manage-bot/manage-bot.component';
import { StartupPopupComponent } from './dashboard/manage-bot/startup-popup/startup-popup.component';
import { SubscriptionPopupComponent } from './dashboard/manage-bot/subscription-popup/subscription-popup.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { HowToRegisterComponent } from './sessions/how-to-register/how-to-register.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';

const COMPONENTS: any[] = [
  DashboardComponent,
  LoginComponent,
  RegisterComponent,
  HowToRegisterComponent,
  Error403Component,
  Error404Component,
  Error500Component,
  AddBotPopupComponent,
  ManageBotComponent,
  BotSettingsPopupComponent,
  StartupPopupComponent,
  AccessCodePopupComponent,
  SubscriptionPopupComponent,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, RoutesRoutingModule, ClipboardModule, MatChipsModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class RoutesModule {}
