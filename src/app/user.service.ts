import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  //private baseURL = "http://localhost:8080/api/users";
  //private baseURL = "http://Backend-LB-1549919040.us-east-2.elb.amazonaws.com:8080/api/users";
    private baseURL = "http://backend:8080/api/users";
  //private baseURL = "http://myapp1:8080/api/users";
  
  
  constructor(private httpClient : HttpClient) { }
  getUserList(): Observable<User[]>{ console.log(this.baseURL);
    return this.httpClient.get<User[]>(this.baseURL);
  }
  createUser(user: User): Observable<object>{
    return this.httpClient.post(this.baseURL,user);
  }

  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(this.baseURL+"/"+id);
  }

  updateUser(id:number,user:User): Observable<Object> {
    return this.httpClient.put(this.baseURL+"/"+id,user);

  }

  deleteUser(id:number): Observable<Object> {
    return this.httpClient.delete(this.baseURL+"/"+id);

  }
  
}
