import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FilterListComponent } from '../../shared/filter-list/filter-list.component';
import { ColorListComponent } from '../../shared/color-list/color-list.component';
import { SizesListComponent } from '../../shared/sizes-list/sizes-list.component';
import { PriceSliderComponent } from '../price-slider/price-slider.component';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    MatIconModule,
    FilterListComponent,
    ColorListComponent,
    SizesListComponent,
    PriceSliderComponent,
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  handleCatSelection(item: any) {
    console.log('Selected item:', item);
  }
  handleColSelection(item: any) {
    console.log('Selected Color:', item);
  }
  handleSizeSelection(item: any) {
    console.log('Selected Size:', item);
  }
  handleTypeSelection(item: any) {
    console.log('Selected Type:', item);
  }
  handlePriceChange(item: any) {
    console.log('Selected Price:', item);
  }
  handleRangeSelection(item: any) {
    console.log(item);
  }
}
