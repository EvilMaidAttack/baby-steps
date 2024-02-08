import { ThemeService } from './../theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMale: boolean;

  constructor(private themeService: ThemeService){}

  ngOnInit(): void {
    this.themeService.isMale$.subscribe(value => this.isMale = value);
  }

}
