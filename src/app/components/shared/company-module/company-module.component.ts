import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-company-module',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-module.component.html',
  styleUrl: './company-module.component.scss'
})
export class CompanyModuleComponent {

  @Input() items: { link: string, href: string }[] = []

}
