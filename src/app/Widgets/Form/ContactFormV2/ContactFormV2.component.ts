import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-form-v2',
  templateUrl: './ContactFormV2.component.html',
  styleUrls: ['./ContactFormV2.component.scss']
})
export class ContactFormV2Component implements OnInit {

	public  form 	: FormGroup;
	emailPattern   : string    = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

	constructor(private fb : FormBuilder) { }

	ngOnInit() {

		this.form = this.fb.group({  
  			fname  			: ['', Validators.required],
  			lname  			: ['', Validators.required],
  			email 			: ['', [Validators.required,Validators.pattern(this.emailPattern)]] ,
  			message		   : ['', Validators.required],
  			phone       	: ['', Validators.required] 
		});
	}
}
