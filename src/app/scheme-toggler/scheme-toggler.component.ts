import { Subscription } from 'rxjs';
import { ThemeService } from './../theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheme-toggler',
  templateUrl: './scheme-toggler.component.html',
  styleUrls: ['./scheme-toggler.component.css']
})
export class SchemeTogglerComponent implements OnInit{

  isMale: boolean;
  private isMaleSubscription: Subscription;

  constructor(private themeService: ThemeService) {}

  ngOnInit(){
    this.isMaleSubscription = this.themeService.isMale$.subscribe(
      (value) => this.isMale = value)
      //console.log("from toggler: " + this.isMale);
  }

  switchScheme(){
    this.themeService.toggleTheme();
    //console.log("from switching: " + this.isMale)
  }

}
