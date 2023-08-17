import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { postFormData, postFormDataError, postFormDataSuccess } from './form-steps.actions';
import { AppState } from '../app.state';
import { FormService} from 'src/app/services/form-service.service';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class FormStepsEffects {
    constructor(private actions$: Actions, private store: Store<AppState>, private formStepsService: FormService) {}

    postFormData$ = createEffect(() => this.actions$.pipe(
        ofType(postFormData),
        mergeMap((action) => {
            return this.formStepsService.postData(action.data).pipe(
                map(response => postFormDataSuccess({message: response.message})), 
                catchError(error => of(postFormDataError())))
        }
    )))
}