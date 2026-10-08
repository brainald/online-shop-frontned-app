import { Component, input, output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [MatIconButton, MatIcon],
  selector: 'app-quantity-selector',
  styles: ``,
  template: `
    <div class="flex items-center gap-3">
      <div class="inline-flex items-center">
        <button
          matIconButton
          [disabled]="quantity() === 1"
          (click)="quantityUpdate.emit(quantity() - 1)"
        >
          <mat-icon>remove</mat-icon>
        </button>
        <div class="px-3">{{ quantity() }}</div>
        <button matIconButton (click)="quantityUpdate.emit(quantity() + 1)">
          <mat-icon>add</mat-icon>
        </button>
      </div>
    </div>
  `,
})
export class QuantitySelector {
  quantity = input(0);
  quantityUpdate = output<number>();
}
