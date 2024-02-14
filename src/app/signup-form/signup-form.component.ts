import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit{

  isMale: boolean;

  constructor(private themeSerivce: ThemeService) {
    
  }

  ngOnInit(): void {
      this.themeSerivce.isMale$.subscribe(value => this.isMale = value);
  }
  

}
