import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  @Input() items: string[];
  @Output() select= new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {
  }

  onclick(i: Number):boolean
  {
    console.log(i);
    this.select.emit(i);
    return false;
  }
}
