import { Component, OnInit, Input } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-filter',
  templateUrl: './GridFilter.component.html',
  styleUrls: ['./GridFilter.component.scss']
})
export class GridFilterComponent implements OnInit {

 	@Input() gridFilter : any;

	constructor(public service : DropletService,
					public router : Router) { }

	ngOnInit() {
		
	}

	/**
	  * gridFilterContent method is used to route to filter detail page. 
	  * Also data from the clicked grid item will be transferred to filter detail page.
	  */
	gridFilterContent(content) {	
		this.service.filterDetailContent = content;
		this.router.navigate(['/dashboard/filter-detail',content.id]);
	}

}
