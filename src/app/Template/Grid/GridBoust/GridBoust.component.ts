import { Component, OnInit, Input } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-boust',
  templateUrl: './GridBoust.component.html',
  styleUrls: ['./GridBoust.component.scss']
})
export class GridBoustComponent implements OnInit {

 	@Input() gridBoust : any;

	constructor(public service : DropletService,
					public router : Router) { }

	ngOnInit() {
		
	}

	/**
	  * gridBoustContent method is used to route to boust detail page. 
	  * Also data from the clicked grid item will be transferred to boust detail page.
	  */
	gridBoustContent(content) {	
		this.service.boustDetailContent = content;
		this.router.navigate(['/dashboard/boust-detail',content.id]);
	}

}
