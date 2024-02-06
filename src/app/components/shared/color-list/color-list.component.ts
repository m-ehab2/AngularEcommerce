import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-list',
  standalone: true,
  imports: [],
  templateUrl: './color-list.component.html',
  styleUrl: './color-list.component.scss',
})
export class ColorListComponent {
  @Input() selectedItem!: any;
  @Output() itemSelected = new EventEmitter<any>();
  item: any;
  selectItem(item: any) {
    this.selectedItem = item;
    this.itemSelected.emit(item);
  }
}
