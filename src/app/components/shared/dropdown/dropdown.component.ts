import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIcon, FormsModule, MatFormFieldModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  @Input() title: string = ""
  menuItems: { link: string, href: string }[] = [
    { link: "My account", href: "" },
    { link: "Login", href: "" },
    { link: "Wishlist", href: "" },
    { link: "Cart", href: "" }]

  isMenuOpened: boolean = false;

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
