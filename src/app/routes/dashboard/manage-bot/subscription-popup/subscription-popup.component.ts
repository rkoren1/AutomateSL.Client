import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Package } from '@shared/Models/package.model';
import { SubscriptionPopupService } from './subscription-popup.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddSubscriptionForm } from '@shared/Models/forms.model';

@Component({
  selector: 'app-subscription-popup',
  templateUrl: './subscription-popup.component.html',
  styleUrls: ['./subscription-popup.component.scss'],
})
export class SubscriptionPopupComponent implements OnInit {
  subscriptionForm: FormGroup<AddSubscriptionForm>;
  packages: Package[];

  constructor(
    private subscriptionPopupService: SubscriptionPopupService,
    @Inject(MAT_DIALOG_DATA) public currentPackage: { package: string; botId: number }
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.subscriptionPopupService.getPackages().subscribe(packages => {
      this.packages = packages;
      this.packages = this.packages.filter(ele => ele.packageName !== 'Free Trial');
      console.log(this.packages);
    });
  }
  private initForm() {
    this.subscriptionForm = new FormGroup<AddSubscriptionForm>({
      packageName: new FormControl(null, {
        nonNullable: true,
      }),
      dateUnit: new FormControl('Week', {
        nonNullable: true,
      }),
      quantityOfDateUnits: new FormControl(1, {
        nonNullable: true,
      }),
    });
  }
  confirmClicked() {
    const formData = this.subscriptionForm.value;
    this.subscriptionPopupService
      .payForPackage({
        packageId: formData.packageName!,
        dateUnit: formData.dateUnit!,
        amountOfDateUnits: formData.quantityOfDateUnits!,
        botId: this.currentPackage.botId,
      })
      .subscribe(res => console.log(res));
    console.log(this.subscriptionForm.value);
  }
  getQuantityOfDateUnits() {
    return this.subscriptionForm.get('quantityOfDateUnits')?.value;
  }
  getPackageName() {
    return this.subscriptionForm.get('packageName')?.value;
  }
  getDateUnit() {
    return this.subscriptionForm.get('dateUnit')?.value;
  }
  getPackagePrice() {
    const selectedPackage = this.subscriptionForm.get('packageName')?.value;
    const dateUnit = this.subscriptionForm.get('dateUnit')?.value;
    const numberOfDateUnits = this.subscriptionForm.get('quantityOfDateUnits')?.value;
    const packageInformation: Package[] = this.packages.filter(pack => pack.id == selectedPackage);
    if (dateUnit === 'Week') {
      return (numberOfDateUnits || 0) * packageInformation[0].pricePerWeek;
    }
    if (dateUnit === 'Month') {
      return (numberOfDateUnits || 0) * packageInformation[0].pricePerMonth;
    }
    return '';
  }
}
