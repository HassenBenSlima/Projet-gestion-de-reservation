import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateClientsPage } from './create-clients';

@NgModule({
  declarations: [
    CreateClientsPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateClientsPage),
  ],
})
export class CreateClientsPageModule {}
