import { ThemeService } from './theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'baby-steps';
  isMale: boolean;

  constructor(private themeService: ThemeService){}

  ngOnInit(): void {
    this.themeService.isMale$.subscribe(value => this.isMale = value);
  }

}
