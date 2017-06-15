import { Component, OnInit } from '@angular/core';

import {ValidateService} from '../../services/validate.service';

import {AuthService} from '../../services/auth.service';

import {FlashMessagesService} from 'angular2-flash-messages';

import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})


export class NavbarComponent implements OnInit {

  constructor(
	private validateService: ValidateService, 
	private flashMessagesService: FlashMessagesService,
	private authService: AuthService,
	private router: Router
	
	) { }

  ngOnInit() {
  }
	onLogoutClick(event){
		event.preventDefault();
		this.authService.logOut();
		this.flashMessagesService.show("You are loggin out.", {cssClass: "alert-success", timeout: 2000});
		
		
		setTimeout(()=>{
			this.router.navigate(['/']);
		   
			
			
		}, 2000);
		
		
	}
}
