import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $ : any;

@Component({
  selector: 'app-logout',
  templateUrl: './Logout.component.html',
  styleUrls: ['./Logout.component.scss']
})
export class LogoutComponent implements OnInit {

	days 					: any;
	hours 				: any;
	minutes		 		: any;
	seconds  			: any;
	difference			: any;
	countDownDate     : any;
	currentTimeStamp  : any = new Date().getTime();

	constructor(
        private router: Router

	) { }

	ngOnInit() {
		this.router.navigate(['/login']);



		
		this.countDownDate = this.currentTimeStamp+(86400*10*1000);
		setInterval(() => {	
			this.counterDown();
		},1000)

		//video pop up
		$('.logoutvideo-popup').magnificPopup({
	      type: 'iframe',
	      iframe: {
	         patterns: {
	            youtube: {
	               index: 'youtube.com/',
	               id: function (url) {
	                  var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
	                  if (!m || !m[1]) return null;
	                  return m[1];
	               },
	               src: 'https://www.youtube.com/embed/rbTVvpHF4cU'
	            }
	         }
	      }
	   });
	}

	//counterDown method is used to Time calculations for days, hours, minutes and seconds.
	counterDown() {
		this.currentTimeStamp = new Date().getTime();
		this.difference = this.countDownDate - this.currentTimeStamp;
		this.days = Math.floor(this.difference / (1000 * 60 * 60 * 24));
		this.hours = Math.floor((this.difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		this.minutes = Math.floor((this.difference % (1000 * 60 * 60)) / (1000 * 60));
		this.seconds = Math.floor((this.difference % (1000 * 60)) / 1000);
	}
}