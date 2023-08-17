import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { resetState } from 'src/app/state/form-steps/form-steps.actions';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.scss']
})
export class ConfirmationPageComponent {

  constructor(private router: Router, private store: Store<AppState>) {

  }

  toHome() {
    this.store.dispatch(resetState());
    this.router.navigate(["/"]);
  }
}
