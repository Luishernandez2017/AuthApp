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
}
