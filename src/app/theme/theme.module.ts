import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

import { SidebarNoticeComponent } from './sidebar-notice/sidebar-notice.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavAccordionItemDirective } from './sidemenu/nav-accordion-item.directive';
import { NavAccordionToggleDirective } from './sidemenu/nav-accordion-toggle.directive';
import { NavAccordionDirective } from './sidemenu/nav-accordion.directive';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

import { TopmenuPanelComponent } from './topmenu/topmenu-panel.component';
import { TopmenuComponent } from './topmenu/topmenu.component';

import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';
import { UserPanelComponent } from './sidebar/user-panel/user-panel.component';
import { BrandingComponent } from './widgets/branding.component';
import { NotificationComponent } from './widgets/notification.component';
import { TranslateComponent } from './widgets/translate.component';
import { UserComponent } from './widgets/user/user.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    FooterComponent,
    AuthLayoutComponent,
    SidebarComponent,
    UserPanelComponent,
    SidemenuComponent,
    NavAccordionDirective,
    NavAccordionItemDirective,
    NavAccordionToggleDirective,
    SidebarNoticeComponent,
    TopmenuComponent,
    TopmenuPanelComponent,
    HeaderComponent,
    BrandingComponent,
    NotificationComponent,
    TranslateComponent,
    UserComponent,
  ],
  imports: [SharedModule],
})
export class ThemeModule {}
