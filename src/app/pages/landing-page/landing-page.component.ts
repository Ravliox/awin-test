import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { incrementCurrentStep } from 'src/app/state/form-steps/form-steps.actions';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(private store: Store<AppState>, private router: Router) {
    
  }

  beginRegistration() {
    this.store.dispatch(incrementCurrentStep());
    this.router.navigate(['/user-form']);
  }
}
