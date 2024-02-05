import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizes-list',
  standalone: true,
  imports: [],
  templateUrl: './sizes-list.component.html',
  styleUrl: './sizes-list.component.css'
})
export class SizesListComponent {
  @Input() selectedSize!:any;
  @Input() selectedType!:any;
  @Output() sizeSelected = new EventEmitter<any>();
  @Output() typeSelected = new EventEmitter<any>();
  item:any;
  selectSize(item: any) {
    this.selectedSize = item;
    this.sizeSelected.emit(item);
  }
  selectType(item: any) {
    this.selectedType = item;
    this.typeSelected.emit(item);
  }
}
