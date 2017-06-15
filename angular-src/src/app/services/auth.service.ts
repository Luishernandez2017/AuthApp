import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

//import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable"; // <- add this import
import {tokenNotExpired} from 'angular2-jwt';


@Injectable()
export class AuthService {

	authToken: any;
	user: any;
	
  constructor(private http:Http) { }
	
	registerUser(user){
		
	let headers = new Headers();
//		
		headers.append('Content-Type', 'application/json');
//
return this.http.post('users/register', user, {headers: headers}).map(res => res.json());
	}
	
	
	
	authenticateUser(user){
		
	let headers = new Headers();
//		
		headers.append('Content-Type', 'application/json');
//
return this.http.post('users/login', user, {headers: headers}).map(res => res.json());
	}
	
	getProfile(){
		
	let headers = new Headers();
		
		this.loadToken(); //set token
	
		headers.append('Authorization', this.authToken);
		//pass as authorization value in headers
		
		headers.append('Content-Type', 'application/json');

return this.http.get('http://localhost:3000/users/profile',  {headers: headers}).map(res => res.json());
	}
	
	
	
	storeUserData(token, user){
		localStorage.setItem('id_token', token);
		localStorage.setItem('user', JSON.stringify(user));
		this.authToken = token;
		this.user = user;
		
	}
	
	loadToken(){
		const token = localStorage.getItem('id_token');
		this.authToken = token;	
	}
	
	
	loggedIn(){
		
		return tokenNotExpired('id_token');
	}
	
	logOut(){
		this.authToken =null;
		this.user = null;
		localStorage.clear();
	}
}
