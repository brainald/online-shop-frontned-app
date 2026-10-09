import { Component, computed, inject, input } from '@angular/core';
import { EcommerceStore } from '../../ecommerce-store';
import { MatIcon } from '@angular/material/icon';
import { Product } from '../../models/product';
import { MatIconButton } from '@angular/material/button';

@Component({
  imports: [MatIcon, MatIconButton],
  selector: 'app-toggle-wishlist-button',
  styles: ``,
  template: `
    <button
      [class]="isInWishlist() ? '!text-red-500' : '!text-gray-400'"
      (click)="toggleWishlist(product())"
      matIconButton
    >
      <mat-icon>{{ isInWishlist() ? 'favorite' : 'favorite_border' }}</mat-icon>
    </button>
  `,
})
export class ToggleWishlistButton {
  product = input.required<Product>();
  store = inject(EcommerceStore);
  isInWishlist = computed(() => this.store.wishlistItems().find((p) => p.id === this.product().id));

  toggleWishlist(product: Product) {
    if (this.isInWishlist()) {
      this.store.removeFromWishlist(product);
    } else {
      this.store.addToWishlist(product);
    }
  }
}
