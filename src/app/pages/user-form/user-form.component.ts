import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectCurrentStep, selectFormData } from 'src/app/state/form-steps/form-steps.selectors';
import FormData from 'src/app/models/form-data.interface';
import { MatStepper } from '@angular/material/stepper';
import { Subscription, take, takeLast, takeUntil } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { decrementCurrentStep, incrementCurrentStep, modifyAdditionalInfo, modifyProfileForm, postFormData, resetState } from 'src/app/state/form-steps/form-steps.actions';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  @ViewChild('stepper') stepper?: MatStepper;

  currentStep$ = this.store.select(selectCurrentStep);
  userFormData$ = this.store.select(selectFormData);
  formDataSubscription$: Subscription | undefined;

  userFormData!: FormData;
  profileForm!: FormGroup;
  additionalInfoForm!: FormGroup;
  currentStep: number | undefined;
  currentStepSubscription$: Subscription | undefined;

  constructor(private store: Store<AppState>, private router: Router, private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.formDataSubscription$ = this.userFormData$.subscribe(userFormData => {
      this.userFormData = userFormData;

      this.profileForm = this.fb.group({
        firstName: [userFormData.profileForm.firstName, [Validators.required]],
        lastName: [userFormData.profileForm.lastName, [Validators.required]],
        email: [userFormData.profileForm.email, [Validators.required, Validators.email]],
        bio: [userFormData.profileForm.bio]
      });

      this.additionalInfoForm = this.fb.group({
        socialMediaLinks: this.fb.array([userFormData.additionalInfo.socialMediaLinks]),
        expertise: [userFormData.additionalInfo.expertise],
        areasOfInterest: [userFormData.additionalInfo.areasOfInterest]
      })
    })

    this.currentStepSubscription$ = this.currentStep$.subscribe(step => {this.currentStep = step; console.log(`step: ${step}`)});
  }

  ngOnDestroy() {
    this.formDataSubscription$?.unsubscribe();
    this.currentStepSubscription$?.unsubscribe();
  }

  isNextDisabled() {
    if(this.currentStep === 1) {
      return !this.profileForm.valid;
    } else if (this.currentStep === 2) {
      return !this.additionalInfoForm.valid;
    }

    return false;
  }
  
  goForward(){
    if(this.currentStep === 1) {
      let profileForm = this.profileForm.value;
      this.store.dispatch(modifyProfileForm({profileForm}));
    } else if(this.currentStep === 2) {
      let additionalInfo = this.additionalInfoForm.value;
      this.store.dispatch(modifyAdditionalInfo({additionalInfo}));
    } else if(this.currentStep === 3) {
      let data = this.userFormData;
      this.store.dispatch(postFormData({ data }));
      this.router.navigate(["/confirmation"]);
    }
    this.store.dispatch(incrementCurrentStep());
    this.stepper?.next();
  }

  goBackwards() {
    if(this.currentStep! > 1) {
      this.stepper?.previous();
    }

    if(this.currentStep === 1) {
      this.router.navigate(["/"]);
    }

    this.store.dispatch(decrementCurrentStep());
  }
}
