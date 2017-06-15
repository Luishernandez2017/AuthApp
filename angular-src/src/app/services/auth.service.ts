import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

//import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable"; // <- add this import


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
return this.http.post('http://localhost:3000/users/register', user, {headers: headers}).map(res => res.json());
	}
	
	
	
	authenticateUser(user){
		
	let headers = new Headers();
//		
		headers.append('Content-Type', 'application/json');
//
return this.http.post('http://localhost:3000/users/login', user, {headers: headers}).map(res => res.json());
	}
	
	
	storeUserData(token, user){
		localStorage.setItem('id_token', token);
		localStorage.setItem('user', JSON.stringify(user));
		this.authToken = token;
		this.user = user;
		
	}
	
	logOut(){
		this.authToken =null;
		this.user = null;
		localStorage.clear();
	}
}
