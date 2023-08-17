import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-confirm-submit',
  templateUrl: './confirm-submit.component.html',
  styleUrls: ['./confirm-submit.component.scss']
})
export class ConfirmSubmitComponent {
  @Input() data?: any;
}
