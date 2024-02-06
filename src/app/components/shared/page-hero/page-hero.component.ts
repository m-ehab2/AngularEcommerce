import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-hero',
  templateUrl: './page-hero.component.html',
  styleUrls: ['./page-hero.component.scss'],
  standalone: true,
  imports: [MatIconModule],
})
export class PageHeroComponent {
  @Input() url!: string;
  @Input() title!: string;
  @Input() paragraph!: string;
}
