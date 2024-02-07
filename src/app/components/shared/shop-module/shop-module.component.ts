import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shop-module',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-module.component.html',
  styleUrl: './shop-module.component.scss'
})
export class ShopModuleComponent {

  @Input() items: { link: string, href: string }[] = []

}
