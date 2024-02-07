import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-module',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-module.component.html',
  styleUrl: './info-module.component.scss'
})
export class InfoModuleComponent {
  @Input() items: { link: string, href: string }[] = []
}
