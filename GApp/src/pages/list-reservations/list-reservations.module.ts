import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListReservationsPage } from './list-reservations';

@NgModule({
  declarations: [
    ListReservationsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListReservationsPage),
  ],
})
export class ListReservationsPageModule {}
