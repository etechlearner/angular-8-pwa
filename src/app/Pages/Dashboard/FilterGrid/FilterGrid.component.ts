import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';

@Component({
  selector: 'app-filter-grid',
  templateUrl: './FilterGrid.component.html',
  styleUrls: ['./FilterGrid.component.scss']
})
export class FilterGridComponent implements OnInit {

	filterGrid : any;

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
		//get filter content
		this.service.getFilterContent().
			subscribe( response => { this.filterGrid = response },
	                 err 	  =>  console.log(err),
	                 ()       =>  this.filterGrid
	           	);
	}

}
