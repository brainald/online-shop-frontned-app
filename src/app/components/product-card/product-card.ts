import { MatButton } from '@angular/material/button';
import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../ecommerce-store';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MatButton, MatIcon, RouterLink],
  selector: 'app-product-card',
  styles: ``,
  template: `
    <div
      class="bg-white cursor-pointer rounded-xl shadow-xl overflow-hidden flex flex-col h-full relative transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        class="w-full h-[300px] object-cover rounded-t-xl"
        [src]="product().imageUrl"
        [routerLink]="['/product', product().id]"
      />
      <ng-content />
      <div class="p-5 flex flex-col flex-1" [routerLink]="['/product', product().id]">
        <h3 class="text-lg font-semibold text-gray-900 mb-2 leading-tight">
          {{ product().name }}
        </h3>
        <p class="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">{{ product().description }}</p>
        <div class="text-sm font-medium mb-4">
          {{ product().inStock ? 'In Stock' : 'Out of Stock' }}
        </div>

        <div class="flex items-center justify-between mt-auto">
          <span class="text-2xl font-bold text-gray-900"> \${{ product().price }} </span>
          <button
            matButton="filled"
            class="flex items-center gap-2"
            (click)="addToCartClicked(product())"
          >
            <mat-icon>shopping_cart</mat-icon>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  `,
})
export class ProductCard {
  product = input.required<Product>();

  store = inject(EcommerceStore);

  addToCartClicked = (product: Product, quantity?: number) => {
    this.store.addToCart(product, quantity);
  };
}
