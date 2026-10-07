import { computed } from '@angular/core';
import { Product } from './models/product';
import {
  patchState,
  signalMethod,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

export type EcommerceState = {
  products: Product[];
  category: string;
};

export const EcommerceStore = signalStore(
  { providedIn: 'root' },
  withState({
    products: [
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
    ],
    category: 'all',
  }),
  withComputed(({ category, products }) => ({
    filteredProducts: computed(() => {
      if (category().toLowerCase() === 'all') return products();
      return products().filter((p) => p.category.toLowerCase() === category().toLowerCase());
    }),
  })),
  withMethods((store) => ({
    setCategory: signalMethod((category: string) => {
      patchState(store, { category });
    }),
  })),
);
