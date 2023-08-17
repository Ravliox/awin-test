import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { selectCurrentStep } from './state/form-steps/form-steps.selectors';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentStep$ = this.store.select(selectCurrentStep);

  constructor(private store: Store<AppState>, private router: Router) {
    this.currentStep$.pipe(take(1)).subscribe(currentStep => {
      if(currentStep >= 1 && currentStep <= 3) {
        this.router.navigate(["/user-form"]);
      } else if (currentStep > 3) {
        this.router.navigate(["/confirmation"]);
      }
    })
  }
}
