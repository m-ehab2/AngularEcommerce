import { Component,Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-list.component.html',
  styleUrl: './filter-list.component.css'
})
export class FilterListComponent {
  @Input() title!: string;
  @Input() items!: string[];
  @Input() selectedItem!:any;
  @Output() itemSelected = new EventEmitter<any>();

  selectItem(item: any) {
    this.selectedItem = item;
    this.itemSelected.emit(item);
  }
}
