import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

import {GrilleItem} from './domain/grille-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	grille_size: number;
	grille_items: GrilleItem[] = [];

	public generate_random_integers() {
		let previous_position_x = 10;
		let previous_position_y = 25;
		let position_x_max = 1306;
		for (let i = 0; i < this.grille_size; i++) {
			let random_integer = this.random_integer(100,-100);
			let position_x = 0;
			let position_y = 25;
			if(previous_position_x < position_x_max )
				{
					position_x = previous_position_x + 25 + 2;
					previous_position_x = position_x;
					position_y = previous_position_y;
				}
			else {
				previous_position_x = 10;
				position_x = previous_position_x + 25 + 2;
				previous_position_x = position_x;
				position_y = previous_position_y + 25 + 2;
				previous_position_y = position_y;
			}
			let red   = 255 - (100 - random_integer);
			let green = 255 - (100 + random_integer);
			let blue  = 0;
			let fillColor = `rgb(${red}, ${green}, ${blue})`;
			let item = new GrilleItem(position_x,position_y,random_integer,fillColor);
			this.grille_items.push(item);
  		}
	}

  public on_submit_grille_size(form: NgForm) {
  	this.grille_size  = form.value.grille_size;
  	this.grille_items = [];
  	this.generate_random_integers();
  }

  public random_integer(min, max) {
  	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}
