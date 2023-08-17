import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form.component';
import { ProfileComponent } from './profile/profile.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { ConfirmSubmitComponent } from './confirm-submit/confirm-submit.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { UserFormRoutingModule } from './user-form-routing.module';



@NgModule({
  declarations: [
    UserFormComponent,
    ProfileComponent,
    AdditionalInfoComponent,
    ConfirmSubmitComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserFormRoutingModule
  ]
})
export class UserFormModule { }
