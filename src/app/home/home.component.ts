import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  isMale: boolean;


  constructor(private themeService: ThemeService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.themeService.isMale$.subscribe(value => this.isMale = value)
  }

  

}
