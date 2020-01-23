import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';
import { Router,ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-boust-detail',
  templateUrl: './BoustDetail.component.html',
  styleUrls: ['./BoustDetail.component.scss']
})
export class BoustDetailComponent implements OnInit {
		
	gridItemDetails 	: any;
	socialIcons 	 	: any;
	postList			 	: any;
	categories 		 	: any;
	tags 					: any;
	recentComments 	: any;
	aboutAuthorContent: any;
	boustId      		: any;

	constructor(public service : DropletService,
					private route  : ActivatedRoute,
               private router : Router) { }

	ngOnInit() {

		this.route.params.subscribe(res => {
			this.boustId = res.id;
			this.getBlodDetails();
      });

		//social icons content
		this.service.getSocialIconsContent().
			subscribe(response => {this.socialIcons = response},
						 err      => console.log(err),
						 ()       => this.socialIcons
			);
		//get post list content
		this.service.getBoustContent().
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
		this.service.boustDetailContent = event;
		this.router.navigate(['/boust/boust-detail',event.id]);
	}

	//getBlodDetails method is used to get the boust detail.
	public getBlodDetails() {
      this.boustId = (this.boustId) ? this.boustId : 1;
      this.service.getBoustContent().
        subscribe(res => {this.getBoustDetailsResponse(res)});
   }

   //getBoustDetailsResponse method is used to get the response of boust and then show the boust item details.
   public getBoustDetailsResponse(response) {
      for(let data of response)
      {
         if(data.id == this.boustId) {
            this.gridItemDetails = data;
            break;
         }
      }
   }
}
