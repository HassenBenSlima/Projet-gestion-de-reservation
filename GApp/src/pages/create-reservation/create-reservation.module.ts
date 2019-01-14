import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateReservationPage } from './create-reservation';

@NgModule({
  declarations: [
    CreateReservationPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateReservationPage),
  ],
})
export class CreateReservationPageModule {}
