import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-currency-dropdown',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './currency-dropdown.component.html',
  styleUrl: './currency-dropdown.component.scss'
})
export class CurrencyDropdownComponent {
  isMenuOpenedCurrency: boolean = false;
  toggleMenuCurrency(): void {
    this.isMenuOpenedCurrency = !this.isMenuOpenedCurrency;
  }
}
