import { createReducer, on } from '@ngrx/store';
import FormData from 'src/app/models/form-data.interface';
import FormStepsState from 'src/app/models/form-steps-state.interface';
import { decrementCurrentStep, incrementCurrentStep, modifyAdditionalInfo, modifyProfileForm, resetState } from './form-steps.actions';

export const initialState: FormStepsState = {
    currentStep: 0,
    formData: {
        profileForm: {
            firstName: '',
            lastName: '',
            email: '',
            bio: ''
        },
        additionalInfo: {
            socialMediaLinks: [''],
            expertise: '',
            areasOfInterest: ['']
        }
    }
}

export const formStepsReducer = createReducer(
    initialState,
    on(incrementCurrentStep, (state) => ({...state, currentStep: state.currentStep + 1})),
    on(decrementCurrentStep, (state) => ({...state, currentStep: state.currentStep - 1})),
    on(modifyProfileForm, (state, data) => ({
        ...state,
        formData: {
            additionalInfo: state.formData.additionalInfo,
            profileForm: data.profileForm
        }
    })),
    on(modifyAdditionalInfo, (state, data) => ({
        ...state,
        formData: {
            additionalInfo: data.additionalInfo,
            profileForm: state.formData.profileForm
        }
    })),
    on(resetState, (state) => ({
        ...initialState
    }))
);