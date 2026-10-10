import { Component, input } from '@angular/core';
import { Product } from '../../../models/product';
import { RatingSummary } from '../rating-summary/rating-summary';

@Component({
  imports: [RatingSummary],
  selector: 'app-view-reviews',
  styles: ``,
  template: `<div appViewPanel>
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold">Customer Reviews</h2>
    </div>

    <app-rating-summary [product]="product()" />
  </div> `,
})
export class ViewReviews {
  product = input.required<Product>();
}
