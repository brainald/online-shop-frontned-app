import { Component, DestroyRef, inject, OnInit, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ViewPanel } from '../../../directives/view-panel';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [MatIcon, ViewPanel, MatFormField, MatInput, ReactiveFormsModule],
  selector: 'app-shipping-form',
  styles: ``,
  template: `
    <div appViewPanel>
      <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
        <mat-icon>local_shipping</mat-icon>
        Shipping Information
      </h2>
      <form class="grid grid-cols-1 lg:grid-cols-2 gap-4" [formGroup]="shippingForm">
        <mat-form-field>
          <input matInput formControlName="firstName" type="text" placeholder="First Name" />
        </mat-form-field>
        <mat-form-field>
          <input matInput type="text" formControlName="lastName" placeholder="Last Name" />
        </mat-form-field>
        <mat-form-field class="col-span-2">
          <textarea matInput formControlName="address" type="text" placeholder="Address"></textarea>
        </mat-form-field>
        <mat-form-field>
          <input matInput formControlName="city" type="text" placeholder="City" />
        </mat-form-field>
        <mat-form-field>
          <input matInput formControlName="state" type="text" placeholder="State" />
        </mat-form-field>
        <mat-form-field class="col-span-2">
          <input matInput formControlName="zip" type="text" placeholder="Zip" />
        </mat-form-field>
      </form>
    </div>
  `,
})
export default class ShippingForm implements OnInit {
  destroyRef = inject(DestroyRef);
  fb = inject(NonNullableFormBuilder);
  validityChange = output<boolean>();

  shippingForm = this.fb.group({
    firstName: ['John', Validators.required],
    lastName: ['Bravo', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required],
  });

  ngOnInit() {
    this.validityChange.emit(this.shippingForm.valid);
    this.shippingForm.statusChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.validityChange.emit(this.shippingForm.valid));
  }
}
