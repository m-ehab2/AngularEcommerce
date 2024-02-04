import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHeroComponent } from './components/shared/page-hero/page-hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PageHeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentItem = 'Shop';
}
