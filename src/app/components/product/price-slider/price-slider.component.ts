import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-price-slider',
  standalone: true,
  imports: [FormsModule, MatSliderModule, MatInputModule, MatFormFieldModule],
  templateUrl: './price-slider.component.html',
  styleUrl: './price-slider.component.scss',
})
export class PriceSliderComponent {
  @Output() rangeChanged = new EventEmitter<{ min: number; max: number }>();
  @Input() minValue!: number;
  @Input() maxValue!: number;
  @Input() step: number = 10;
  valLeft!: number;
  valRight!: number;
  ngOnInit() {
    this.valRight = this.maxValue / 2 + this.maxValue / 3;
    this.valLeft = this.maxValue / 2 - this.maxValue / 3;
  }
  handleChange(e: any) {
    this.rangeChanged.emit({ min: this.valLeft, max: this.valRight });
  }
}
