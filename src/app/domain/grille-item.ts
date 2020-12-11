export class GrilleItem {

	position_x: number;
	position_y: number;
	item_integer: number;
	fillColor:string;

	constructor(position_x: number,position_y: number,
		        item_integer: number,fillColor:string) {
    	
    	this.position_x = position_x;
    	this.position_y = position_y;
    	this.item_integer = item_integer;
    	this.fillColor = fillColor;
  	}
}
