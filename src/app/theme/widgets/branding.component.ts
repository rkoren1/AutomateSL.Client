import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="matero-branding" href="/">
      <img
        src="./assets/images/automateSL_website_logo.png"
        style="width: 100%; height: 33px;"
        class="matero-branding-logo-expanded"
        alt="AutomateSL"
      />
      <!-- <span class="matero-branding-name">AutomateSL</span> -->
    </a>
  `,
})
export class BrandingComponent {}
