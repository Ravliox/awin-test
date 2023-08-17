import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  postData(data: FormData) {
    console.log("sending data");
    return of({message: 'success'});
  }
}
