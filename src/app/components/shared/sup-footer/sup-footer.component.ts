import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CopyRightsComponent } from '../copy-rights/copy-rights.component';
import { LangDropdownComponent } from '../lang-dropdown/lang-dropdown.component';
import { CurrencyDropdownComponent } from '../currency-dropdown/currency-dropdown.component';
import { SocialLinksComponent } from '../social-links/social-links.component';

@Component({
  selector: 'app-sup-footer',
  standalone: true,
  imports: [
    CommonModule,
    CopyRightsComponent,
    LangDropdownComponent,
    CurrencyDropdownComponent,
    SocialLinksComponent
  ],
  templateUrl: './sup-footer.component.html',
  styleUrl: './sup-footer.component.scss'
})
export class SupFooterComponent {

}
