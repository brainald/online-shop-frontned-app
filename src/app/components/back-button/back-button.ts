import { Component, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MatButton, MatIcon, RouterLink],
  selector: 'app-back-button',
  styles: `
    :host {
      display: block;
    }
  `,
  template: `
    <button
      matButton="text"
      [routerLink]="navigateTo() ?? null"
      class="-ms-2 flex items-center gap-1 verem"
    >
      <mat-icon>arrow_back</mat-icon>
      <ng-content />
    </button>
  `,
})
export class BackButton {
  navigateTo = input<string>();
}
