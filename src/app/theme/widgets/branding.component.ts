import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="matero-branding" href="/">
      <img
        src="./assets/images/logo-dark-theme.png"
        class="matero-branding-logo-expanded"
        alt="logo"
      />
      <span class="matero-branding-name">AutomateSL</span>
    </a>
  `,
})
export class BrandingComponent {}
