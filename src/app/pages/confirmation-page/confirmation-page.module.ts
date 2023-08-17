import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationPageComponent } from './confirmation-page.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ConfirmationPageRoutingModule } from './confirmation-page-routing.module';



@NgModule({
  declarations: [
    ConfirmationPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConfirmationPageRoutingModule
  ]
})
export class ConfirmationPageModule { }
