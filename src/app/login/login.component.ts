import { AuthenticationService } from '../services/authentication.service';
import { ThemeService } from './../theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  isMale: boolean;
  signInData = {
    email: "masarh@test.com",
    password: "test123"
  };

  constructor(private themeService: ThemeService, private authService: AuthenticationService){

  }

  ngOnInit(): void {
      this.themeService.isMale$.subscribe(value => this.isMale = value);
  }

  signIn(){
    this.authService.signin(this.signInData).subscribe(response => console.log(response))
  }

  debug(x){
    console.log(x);
  }


}
