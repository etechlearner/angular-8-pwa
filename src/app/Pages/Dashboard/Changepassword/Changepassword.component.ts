import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-changepassword',
	templateUrl: './Changepassword.component.html',
	styleUrls: ['./Changepassword.component.scss']
})

export class ChangepasswordComponent implements OnInit {

 	public  form 	: FormGroup;
	emailPattern   : string    = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

	constructor(private fb : FormBuilder,
					private router : Router) { }

	ngOnInit() {
		this.form = this.fb.group({  
  			newPassword		: ["",[Validators.required,Validators.minLength(6)]],
			confirmPassword : ["",[Validators.required,Validators.minLength(6)]]
		},{
      	validator : this.MatchPassword // your validation method
    	});
	}

	/*
	 * Match Password Custom validation
	 */
	MatchPassword(AC: AbstractControl) {
      let password = AC.get('newPassword').value; // to get value in input tag
      let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
      if(password != confirmPassword) {
      	AC.get('confirmPassword').setErrors( {MatchPassword: true} )
      } else {
         return null
      }
	}
	
	//signUp method is used when form field is valid then router will be navigate to the home page. 
	changePassword(){
		if(this.form.valid){
			this.router.navigate(['/home']);
		}else{
			for(let i in this.form.controls)
				{
					this.form.controls[i].markAsTouched();
				}
		}
	}

}
