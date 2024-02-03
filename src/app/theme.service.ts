import { Injectable } from '@angular/core';
import { of, } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isMale = of(false);

  toggleTheme(){
    this.isMale.pipe(map(
      (isMale) => !isMale
    )).subscribe(
      (newValue) => {
        this.isMale = of(newValue);
        console.log("from service: "+ newValue);  
      }
    )
  }

  getIsMale(){
    this.isMale.subscribe(v => {
      console.log("from function getIsMale: " + v);
    })

    return this.isMale;    
  }

}
