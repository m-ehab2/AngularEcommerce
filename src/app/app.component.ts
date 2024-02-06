import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/shared/header/header.component';
import { FilterComponent } from './components/product/filter/filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, HeaderComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  currentItem = 'Shop';
}
