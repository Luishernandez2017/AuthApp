import { Component, OnInit } from '@angular/core';

import {ValidateService} from '../../services/validate.service';

import {AuthService} from '../../services/auth.service';

import {FlashMessagesService} from 'angular2-flash-messages';

import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username:  String;
	password: String;

  constructor(
	private validateService: ValidateService, 
	private flashMessagesService: FlashMessagesService,
	private authService: AuthService,
	private router: Router
	 
	) { }

  ngOnInit() {
  }
	onLoginSubmit(){
		const user={
			username: this.username,
			password: this.password
		}
		
		//Required Fields
		if(!this.validateService.validateLogin(user)){
			this.flashMessagesService.show("Please fill in all fields!", {cssClass: 'alert-danger', timeout: 3000});
			return false;
		   
		   }
		this.authService.authenticateUser(user).subscribe(data =>{
			if(data.success){
				this.authService.storeUserData(data.token, data.user);
				this.flashMessagesService.show("You're now logged in.", {cssClass: 'alert-success', timeout: 3000});
				this.router.navigate(['dashboard']);
			}else{
				this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
	this.router.navigate(['login']);
			}
		});
	}

}

