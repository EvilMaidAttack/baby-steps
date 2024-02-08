import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isMaleSubject = new BehaviorSubject<boolean>(false)
  isMale$ = this.isMaleSubject.asObservable();

  toggleTheme(){
    let newValue = false;
    this.isMale$.subscribe(value => newValue = !value)
    this.isMaleSubject.next(newValue);
  }



}
