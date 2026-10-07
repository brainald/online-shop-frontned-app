import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../../components/product-card/product-card';
import { MatSidenavContainer, MatSidenavContent, MatSidenav } from '@angular/material/sidenav';

@Component({
  imports: [ProductCard, MatSidenav, MatSidenavContainer, MatSidenavContent],
  selector: 'app-products-grid',
  styles: ``,
  template: `
    <mat-sidenav-container>
      <mat-sidenav mode="side" opened="true"> hello</mat-sidenav>
      <mat-sidenav-content class="bg-gray-100 p-6 h-full">
        <h1 class="text-2xl font-bold text-gray-900 mb-6">{{ category() }}</h1>
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

  addToCart(product: Product) {
    console.log(product);
  }
}
