import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';
import { Router,ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-filter-detail',
  templateUrl: './FilterDetail.component.html',
  styleUrls: ['./FilterDetail.component.scss']
})
export class FilterDetailComponent implements OnInit {
		
	gridItemDetails 	: any;
	socialIcons 	 	: any;
	postList			 	: any;
	categories 		 	: any;
	tags 					: any;
	recentComments 	: any;
	aboutAuthorContent: any;
	filterId      		: any;

	constructor(public service : DropletService,
					private route  : ActivatedRoute,
               private router : Router) { }

	ngOnInit() {

		this.route.params.subscribe(res => {
			this.filterId = res.id;
			this.getBlodDetails();
      });

		//social icons content
		this.service.getSocialIconsContent().
			subscribe(response => {this.socialIcons = response},
						 err      => console.log(err),
						 ()       => this.socialIcons
			);
		//get post list content
		this.service.getFilterContent().
			subscribe( response => { this.postList = response },
	                 err 	  =>  console.log(err),
	                 ()       =>  this.postList
	        );
		//get category content
	   this.service.getCategoryContent().
			subscribe( response => { this.categories = response },
	                 err 	  =>  console.log(err),
	                 ()       =>  this.categories
	      );
		//get tag content
	   this.service.getTagContent().
			subscribe( response => { this.tags = response },
	                 err 	  =>  console.log(err),
	                 ()       =>  this.tags
	      );
		//get recent comments content
	   this.service.getRecentCommentsContent().
	   	subscribe( response  => { this.recentComments = response },
	   				  err       => console.log(err),
	   				  ()        => this.recentComments
	      );
	   //get about author content
	   this.service.getAboutAuthorContent().
		   	subscribe( response  => { this.aboutAuthorContent = response },
		   				  err       => console.log(err),
		   				  ()        => this.aboutAuthorContent
		      );
	}

	//postDetailContent method is used to get the detail content of post list.
	postDetailContent(event){
		this.service.filterDetailContent = event;
		this.router.navigate(['/filter/filter-detail',event.id]);
	}

	//getBlodDetails method is used to get the filter detail.
	public getBlodDetails() {
      this.filterId = (this.filterId) ? this.filterId : 1;
      this.service.getFilterContent().
        subscribe(res => {this.getFilterDetailsResponse(res)});
   }

   //getFilterDetailsResponse method is used to get the response of filter and then show the filter item details.
   public getFilterDetailsResponse(response) {
      for(let data of response)
      {
         if(data.id == this.filterId) {
            this.gridItemDetails = data;
            break;
         }
      }
   }
}
