import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { AddBotPopupComponent } from './dashboard/add-bot-popup/add-bot-popup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccessCodePopupComponent } from './dashboard/manage-bot/access-code-popup/access-code-popup.component';
import { AccountSettingsPopupComponent } from './dashboard/manage-bot/account-settings-popup/account-settings-popup.component';
import { BotSettingsPopupComponent } from './dashboard/manage-bot/bot-settings-popup/bot-settings-popup.component';
import { ManageBotComponent } from './dashboard/manage-bot/manage-bot.component';
import { StartupPopupComponent } from './dashboard/manage-bot/startup-popup/startup-popup.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';

const COMPONENTS: any[] = [
  DashboardComponent,
  LoginComponent,
  RegisterComponent,
  Error403Component,
  Error404Component,
  Error500Component,
  AddBotPopupComponent,
  ManageBotComponent,
  BotSettingsPopupComponent,
  StartupPopupComponent,
  AccessCodePopupComponent,
  AccountSettingsPopupComponent,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, RoutesRoutingModule, ClipboardModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class RoutesModule {}
