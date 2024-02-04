import { Component,Input, input} from '@angular/core';

@Component({
  selector: 'app-page-hero',
  templateUrl: './page-hero.component.html',
  styleUrls: ['./page-hero.component.css'],
  standalone:true,
  imports:[]
})
export class PageHeroComponent {
  @Input() url!: string;
  @Input() title!:string;
  @Input() paragraph!:string;
}
