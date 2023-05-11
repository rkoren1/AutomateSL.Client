import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Package } from '@shared/Models/package.model';
import { SubscriptionPopupService } from './subscription-popup.service';

@Component({
  selector: 'app-subscription-popup',
  templateUrl: './subscription-popup.component.html',
  styleUrls: ['./subscription-popup.component.scss'],
})
export class SubscriptionPopupComponent implements OnInit {
  accountForm: FormGroup;
  selectedSubscription: string;
  packages: Package[];

  constructor(private subscriptionPopupService: SubscriptionPopupService) {
    this.initForm();
  }

  ngOnInit() {
    this.subscriptionPopupService.getPackages().subscribe(packages => {
      this.packages = packages;
    });
  }
  private initForm() {
    this.accountForm = new FormGroup({
      loginFirstName: new FormControl('', {
        nonNullable: true,
      }),
      loginPassword: new FormControl('', {
        nonNullable: true,
      }),
    });
  }
  validateForm() {}
}
