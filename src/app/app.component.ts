import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen-angular';

  item_colors = ["Geel", "Groen", "Blauw", "Rood", "Paars"]; // Hier kunnen we een nieuw kleur toevoegen.
  item_images = ["assets/geel.jpg", "assets/groen.jpg", "assets/blauw.png","assets/rood.jpg", "assets/paars.jpg"]; // hier kunnen we een nieuwe afbeelding toevoegen.
// de afbeelding en de naam van het kleur moeten in de juiste volgorde staan,
// anders zal een verkeerd kleur worden getoond.

  selected_item=0;

  onSelect(i: number):void {
    this.selected_item=i;
  }
}

