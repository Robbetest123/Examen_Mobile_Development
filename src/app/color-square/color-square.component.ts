import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-square',
  templateUrl: './color-square.component.html',
  styleUrls: ['./color-square.component.css']
})
export class ColorSquareComponent implements OnInit {

  @Input() afbeelding: string;
  constructor() { }

  ngOnInit(): void {
  }

}
