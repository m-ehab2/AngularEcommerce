import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { FooterAboutComponent } from '../footer-about/footer-about.component';
import { SocialLinksComponent } from '../social-links/social-links.component';
import { ShopModuleComponent } from '../shop-module/shop-module.component';
import { CompanyModuleComponent } from '../company-module/company-module.component';
import { InfoModuleComponent } from '../info-module/info-module.component';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent,
    FooterAboutComponent,
    SocialLinksComponent,
    ShopModuleComponent,
    CompanyModuleComponent,
    InfoModuleComponent,
    DropdownComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  shopItems: { link: string, href: string }[] = [
    { link: "My account", href: "" },
    { link: "Login", href: "" },
    { link: "Wishlist", href: "" },
    { link: "Cart", href: "" }]

  companyItems: { link: string, href: string }[] = [
    { link: "About us", href: "" },
    { link: "Privacy policy", href: "" },
    { link: "Terms & Conditions", href: "" },
    { link: "Contact us", href: "" }]

  infoItems: { link: string, href: string }[] = [
    { link: "About us", href: "" },
    { link: "Privacy policy", href: "" },
    { link: "Terms & Conditions", href: "" },
    { link: "Contact us", href: "" }]

}
