import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../Services/Droplet.service';

@Component({
	selector: 'app-home',
	templateUrl: './Home.component.html',
	styleUrls: ['./Home.component.scss']
})

export class HomeComponent implements OnInit {

	gridOverlay  		: any;
	serviceItems 		: any;
	testimonialData	: any;
	counterContent    : any;

	/**
	  * Recent Work Content Heading
	  */
	recentWorkHeading : any = {
		title : "Recent Work",
		content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
	}

	/**
	  * Explore Studio content
	  */
	exploreStudio : any = [
		"https://via.placeholder.com/700x637",
		"https://via.placeholder.com/700x514",
		"https://via.placeholder.com/700x1210"
	]

	/**
	  * Client Says Content Heading
	  */
	clientSaysHeading : any = {
		title : "Client Says",
		content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
	}

	/**
	  * Content of Contact section
	  */
	contactContent : any = {
		title : "Become an ally of Reliable and Experienced Agency",
		content : "Enter your details & we'll be in touch to discuss your project",
		email : "support@theironnetwork.org",
		contactNumber : "+01 2345 678 910",
		contactTo : "+016272627273" ,
		image : "https://via.placeholder.com/700x700/"
	}

	constructor(public service : DropletService) { }

	ngOnInit() {
		
		//blog overlay content
		this.service.getBlogContent().
			subscribe( response => { this.gridOverlay = response },
	                 err 	  =>  console.log(err),
	                 ()       =>  this.gridOverlay
	           	);

		//service content
		this.service.getServiceContent().
			subscribe( response => {this.serviceItems = response },
					   err      => console.log(err),
					   ()       => this.serviceItems
					);

		//counter content
		this.service.getCounterContent().
			subscribe( response => {this.counterContent = response },
					   err      => console.log(err),
					   ()       => this.counterContent
					);

		//testimonial content
		this.service.getTestimonialContent().
			subscribe( response => {this.testimonialData = response },
					   err      => console.log(err),
					   ()       => this.testimonialData
					);
	}
}
