import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../../components/product-card/product-card';
import { MatSidenavContainer, MatSidenavContent, MatSidenav } from '@angular/material/sidenav';
import { MatNavList, MatListItem } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  imports: [
    ProductCard,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatListItem,
    MatNavList,
    RouterLink,
    TitleCasePipe,
  ],
  selector: 'app-products-grid',
  styles: ``,
  template: `
    <mat-sidenav-container>
      <mat-sidenav mode="side" opened="true">
        <div class="p-6">
          <h2 class="text-lg text-gray-900">Categories</h2>
          <mat-nav-list>
            @for (cat of categories(); track cat) {
              <mat-list-item
                [activated]="cat === category()"
                class="my-2"
                [routerLink]="['/products', cat]"
              >
                <span
                  matListItemTitle
                  class="font-medium"
                  [class]="cat === category() ? 'text-white' : null"
                >
                  {{ cat | titlecase }}
                </span>
              </mat-list-item>
            }
          </mat-nav-list>
        </div>
      </mat-sidenav>
      <mat-sidenav-content class="bg-gray-100 p-6 h-full min-h-[calc(100vh-64px)]">
        <h1 class="text-2xl font-bold text-gray-900 mb-1">{{ category() | titlecase }}</h1>
        <p class="text-base text=gray-600 mb-6">{{ filteredProducts().length }} products found</p>
        <div class="responsive-grid">
          @for (product of filteredProducts(); track product.id) {
            <app-product-card [product]="product" (addToCartClicked)="addToCart($event)" />
          }
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export default class ProductsGrid {
  category = input<string>('all');

  products = signal<Product[]>([
    {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      price: 10,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 4,
      reviewCount: 10,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'Description 2',
      price: 20,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 3,
      reviewCount: 50,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: '3',
      name: 'Product 3',
      description: 'Description 3',
      price: 23,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 2,
      reviewCount: 22,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: '4',
      name: 'Product 4',
      description: 'Description 4',
      price: 122,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 1,
      reviewCount: 22,
      inStock: true,
      category: 'Mobile phones',
    },
    {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      price: 10,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 4,
      reviewCount: 10,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'Description 2',
      price: 20,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 3,
      reviewCount: 50,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: '3',
      name: 'Product 3',
      description: 'Description 3',
      price: 23,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 2,
      reviewCount: 22,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: '4',
      name: 'Product 4',
      description: 'Description 4',
      price: 122,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 1,
      reviewCount: 22,
      inStock: true,
      category: 'Mobile phones',
    },
    {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      price: 10,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 4,
      reviewCount: 10,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'Description 2',
      price: 20,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 3,
      reviewCount: 50,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: '3',
      name: 'Product 3',
      description: 'Description 3',
      price: 23,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 2,
      reviewCount: 22,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: '4',
      name: 'Product 4',
      description: 'Description 4',
      price: 122,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 1,
      reviewCount: 22,
      inStock: true,
      category: 'Mobile phones',
    },
    {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      price: 10,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 4,
      reviewCount: 10,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'Description 2',
      price: 20,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 3,
      reviewCount: 50,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: '3',
      name: 'Product 3',
      description: 'Description 3',
      price: 23,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 2,
      reviewCount: 22,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: '4',
      name: 'Product 4',
      description: 'Description 4',
      price: 122,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 1,
      reviewCount: 22,
      inStock: true,
      category: 'Mobile phones',
    },
    {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      price: 10,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 4,
      reviewCount: 10,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'Description 2',
      price: 20,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 3,
      reviewCount: 50,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: '3',
      name: 'Product 3',
      description: 'Description 3',
      price: 23,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 2,
      reviewCount: 22,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: '4',
      name: 'Product 4',
      description: 'Description 4',
      price: 122,
      imageUrl:
        'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg',
      rating: 1,
      reviewCount: 22,
      inStock: true,
      category: 'Mobile phones',
    },
  ]);

  filteredProducts = computed(() => {
    if (this.category().toLowerCase() === 'all') return this.products();
    return this.products().filter(
      (p) => p.category.toLowerCase() === this.category().toLowerCase(),
    );
  });

  categories = signal<string[]>(['all', 'electronics', 'clothing', 'accessories', 'home']);

  addToCart(product: Product) {
    console.log(product);
  }
}
