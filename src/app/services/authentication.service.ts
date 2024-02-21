import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseURL = "http://localhost:8000/"

  constructor(private http: HttpClient) { }

  signin(data){
    return this.http.post(`${this.baseURL}signin/`, data);
  }

}
