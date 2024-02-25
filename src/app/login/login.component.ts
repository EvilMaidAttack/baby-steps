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

  constructor(private themeService: ThemeService, private authService: AuthenticationService){

  }

  ngOnInit(): void {
      this.themeService.isMale$.subscribe(value => this.isMale = value);
  }

  signIn(data){
    this.authService.signin(data.value).subscribe(response => console.log(response))
  }

  debug(x){
    console.log(x);
  }


}
