import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../../../Core/Menu/MenuItems/MenuItems';
import { Router, NavigationEnd } from '@angular/router';
import { DropletService } from '../../../Services/Droplet.service';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-footer-one',
  templateUrl: './FooterOne.component.html',
  styleUrls: ['./FooterOne.component.scss']
})
export class FooterOneComponent implements OnInit {

	currentUrl  : any;
	socialIcons : any;
	readonly VAPID_PUBLIC_KEY = 'BAhlNbCbzEyraICbjOI_9TAqyIyLK3MLB1Nwu1PHgzcki0LgrbLYaFu8SJzsapRQdme-RqzJnx6AUNRTSUoVQj8';
  
	constructor(public footerMenu : MenuItems,
					private router		: Router,
					public service 	: DropletService, 
					public u_service : UserService,
					public swUpdate : SwUpdate,
					public swPush : SwPush) { }

	ngOnInit() {
		this.router.events
			.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.currentUrl = event.url;
			}
		});
		this.currentUrl = this.router.url;
		
		//social icons content
		this.service.getSocialIconsContent().
			subscribe(response => {this.socialIcons = response},
						 err      => console.log(err),
						 ()       => this.socialIcons
			)
			this.reloadCache();

		}

	
	  reloadCache() {
		if (this.swUpdate.isEnabled) {
		  this.swUpdate.available.subscribe(() => {
			if (confirm('New version available! would you like to update?')) {
			  window.location.reload();
			}
		  });
		}
	  }
	
	  subscribeToNotifications() {
		if (this.swPush.isEnabled) {
		  this.swPush.requestSubscription({
			serverPublicKey: this.VAPID_PUBLIC_KEY
		  })
		  .then(sub => {
			  debugger
			this.u_service.postSubscription(sub).subscribe();
		  })
		  .catch(console.error);
		}
	  }

}
