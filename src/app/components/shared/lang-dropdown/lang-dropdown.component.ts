import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-lang-dropdown',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './lang-dropdown.component.html',
  styleUrl: './lang-dropdown.component.scss'
})
export class LangDropdownComponent {
  isMenuOpenedLang: boolean = false;
  toggleMenuLang(): void {
    this.isMenuOpenedLang = !this.isMenuOpenedLang;
  }
}
