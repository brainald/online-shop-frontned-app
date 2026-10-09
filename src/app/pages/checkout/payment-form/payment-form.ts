import { Component } from '@angular/core';
import { ViewPanel } from '../../../directives/view-panel';
import { MatIcon } from '@angular/material/icon';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';

@Component({
  imports: [ViewPanel, MatIcon, MatRadioGroup, MatRadioButton],
  selector: 'app-payment-form',
  styles: ``,
  template: `
    <div appViewPanel>
      <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
        <mat-icon>payment</mat-icon>
        Payment Options
      </h2>
      <div>
        <mat-radio-group [value]="'stripe'">
          <mat-radio-button value="stripe">
            <img src="stripe.png" alt="Stripe" class="h-6" loading="eager" />
          </mat-radio-button>
        </mat-radio-group>
      </div>
    </div>
  `,
})
export default class PaymentForm {}
