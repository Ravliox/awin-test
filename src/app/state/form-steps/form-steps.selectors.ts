import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import FormStepsState from 'src/app/models/form-steps-state.interface';

export const selectFormStepsState = (state: AppState) => state.formSteps;
export const selectCurrentStep = createSelector(
    selectFormStepsState,
  (state: FormStepsState) => state.currentStep
);
export const selectFormData = createSelector(
  selectFormStepsState,
  (state: FormStepsState) => state.formData
)