import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryApi {
  private readonly categories = ['all', 'electronics', 'clothing', 'accessories', 'home'];

  getCategories() {
    return this.categories;
  }
}
