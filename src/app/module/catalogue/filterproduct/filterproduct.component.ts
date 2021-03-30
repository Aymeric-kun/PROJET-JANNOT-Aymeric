import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-filterproduct',
  templateUrl: './filterproduct.component.html',
  styleUrls: ['./filterproduct.component.css']
})
export class FilterproductComponent implements OnInit {

  @Output() filter : EventEmitter<string> = new EventEmitter<string>();
  filterName : string = "";

  constructor() { }



  ngOnInit(): void {
  }

  filterProduct(filter){
    this.filter.emit(this.filterName);
  }

}
