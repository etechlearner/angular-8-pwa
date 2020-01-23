import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Subscription,Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})

export class DropletService {

	portfolioContent  : any;
	filterDetailContent : any;
	boustDetailContent : any;
	blogDetailContent : any;
	teamDetailContent : any;
  
  	constructor(private http : HttpClient) { }

  	/**
  	  * getFilterContent method is used to get a Filter content from json file.
  	  */
  	getFilterContent () {
  		return this.http.get('assets/data/filter.json').map(Response => Response);
	}
	  
	getBoustContent () {
		return this.http.get('assets/data/boust.json').map(Response => Response);
	}
	  
	  getBlogContent () {
		return this.http.get('assets/data/blog.json').map(Response => Response);
	}

  	/**
  	  * getTeamContent method is used to get a team content from json file.
  	  */
  	getTeamContent () {
  		return this.http.get('assets/data/team.json').map(Response => Response);
  	}

  	/**
  	  * getPortfolioContent method is used to get a portfolio content from json file.
  	  */
  	getPortfolioContent () {
  		return this.http.get('assets/data/portfolio.json').map(Response => Response);
  	}

  	/**
  	  * getServiceContent method is used to get a service content from json file.
  	  */
  	getServiceContent () {
  		return this.http.get('assets/data/services.json').map(Response => Response);
  	}

  	/**
  	  * getProcessContent method is used to get a process content from json file.
  	  */
  	getProcessContent () {
  		return this.http.get('assets/data/process.json').map(Response => Response);
  	}

  	/**
  	  * getClientContent method is used to get a client content from json file.
  	  */
  	getClientContent () {
  		return this.http.get('assets/data/client-slider.json').map(Response => Response);
  	}

  	/**
  	  * getSocialIconsContent method is used to get a social icons content from json file.
  	  */
  	getSocialIconsContent () {
  		return this.http.get('assets/data/social-icons.json').map(Response => Response);
  	}

  	/**
  	  * getCategoryContent method is used to get a category content from json file.
  	  */
  	getCategoryContent () {
  		return this.http.get('assets/data/categories.json').map(Response => Response);
  	}

  	/**
  	  * getTagContent method is used to get a tag content from json file.
  	  */
  	getTagContent () {
  		return this.http.get('assets/data/tags.json').map(Response => Response);
  	}

  	/**
  	  * getRecentCommentsContent method is used to get a recent comments content from json file.
  	  */
  	getRecentCommentsContent () {
  		return this.http.get('assets/data/recent-comments.json').map(Response => Response);
  	}

  	/**
  	  * getAboutAuthorContent method is used to get a about author content from json file.
  	  */
  	getAboutAuthorContent () {
  		return this.http.get('assets/data/about-author.json').map(Response => Response);
  	}

  	/**
  	  * getHomeBannerContent method is used to get a home banner slider content from json file.
  	  */
  	getHomeBannerContent () {
  		return this.http.get('assets/data/home-banner.json').map(Response => Response);
  	}
  	
  	/**
  	  * getFaqContent method is used to get a faq content from json file.
  	  */
  	getFaqContent () {
  		return this.http.get('assets/data/faq.json').map(Response => Response);
  	}


  	/**
  	  * getSearchContent method is used to get a Search content from json file.
  	  */
  	getSearchContent () {
  		return this.http.get('assets/data/search.json').map(Response => Response);
  	}

  	/**
  	  * getPricingContent method is used to get a pricing content from json file.
  	  */
  	getPricingContent () {
  		return this.http.get('assets/data/pricing.json').map(Response => Response);
  	}

  	/**
  	  * getCounterContent method is used to get a Counter content from json file.
  	  */
  	getCounterContent() {
  		return this.http.get('assets/data/counter.json').map(Response => Response);
  	}

  	/**
  	  * getTestimonialContent method is used to get a testimonial slider content from json file.
  	  */
  	getTestimonialContent() {
  		return this.http.get('assets/data/testimonial.json').map(Response => Response);
  	}
}
