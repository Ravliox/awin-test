import { createAction, props } from "@ngrx/store";
import FormData from "src/app/models/form-data.interface";

export const incrementCurrentStep = createAction('Increment Current Step of Form');
export const decrementCurrentStep = createAction('Decrement Current Step');

export const modifyProfileForm = createAction('Modify Profile Form Data', props<{ profileForm: any }>());
export const modifyAdditionalInfo = createAction('Modify Additional Info Form Data', props<{ additionalInfo: any }>());

export const postFormData = createAction('Post Form Data to the API', props<{ data: any }>());
export const postFormDataSuccess = createAction('Post Form Data to the API success', props< {message: string}>());
export const postFormDataError = createAction('Post Form Data to the API error');

export const resetState = createAction("Reset State after service call");