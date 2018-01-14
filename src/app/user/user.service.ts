import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
 
// All the RxJS stuff we need
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {User} from 'app/models/user';
 

@Injectable()
export class UserService {

  // Url to API
    private postUrl = 'http://localhost:8080/mydb/rest/user';
   // private postUrl = 'https://jsonplaceholder.typicode.com/users';
    
      // Injecting the http client into the service
      constructor(private http: Http) {}
      getUsers(): Observable<User[]> {
        return this.http.get("/api/rest/showUsers")
           .map((res: Response) => res.json())
           .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     }
     showUserDetails(userId):Observable<User>{
       return this.http.get("/api/rest/userDetails/"+userId)
               .map((res:Response)=>res.json())
               .catch((error:any)=>Observable.throw(error.json().error|| 'Server error'));
     }

}
