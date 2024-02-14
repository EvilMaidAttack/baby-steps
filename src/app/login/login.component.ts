import { ThemeService } from './../theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  isMale: boolean;

  constructor(private themeService: ThemeService){

  }

  ngOnInit(): void {
      this.themeService.isMale$.subscribe(value => this.isMale = value);
  }

  debug(x){
    console.log(x);
  }


}
