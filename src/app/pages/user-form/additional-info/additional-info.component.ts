import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent {
  @Input() formGroup!: FormGroup; 
  areasOfInterest = [
    {
      value: 'finance',
      label: "Finance"
    },
    {
      value: 'sports',
      label: "Sports"
    },
    {
      value: 'tech',
      label: "Tech"
    },
    {
      value: 'education',
      label: "Education"
    }
  ]
  constructor(private fb: FormBuilder) {}

  get socialMediaLinks(): FormArray {
    return this.formGroup.get("socialMediaLinks") as FormArray;
  }

  getFormControl(ac: AbstractControl): FormControl {
    return ac as FormControl;
  } 

  addControl() {
    this.socialMediaLinks.push(this.fb.control(""));
  }

  deleteControl(index: number){
    this.socialMediaLinks.removeAt(index);
  }
}
