import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';

@Component({
  selector: 'app-boust-grid',
  templateUrl: './BoustGrid.component.html',
  styleUrls: ['./BoustGrid.component.scss']
})
export class BoustGridComponent implements OnInit {

	boustGrid : any;

	/**
	  * Number of page items
	  */
	paginationItems : any [] = [
		"1",
		"2",
		"3"
	]

	constructor(public service : DropletService) { }

	ngOnInit() {
		//get boust content
		this.service.getBoustContent().
			subscribe( response => { this.boustGrid = response },
	                 err 	  =>  console.log(err),
	                 ()       =>  this.boustGrid
	           	);
	}

}
