import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen-angular';

  item_colors = ["Geel", "Groen", "Blauw", "Rood", "Paars"];
  item_images = ["assets/geel.jpg", "assets/groen.jpg", "assets/blauw.png","assets/rood.jpg", "assets/paars.jpg"];

  selected_item=0;

  onSelect(i: number):void {
    this.selected_item=i;
  }
}

