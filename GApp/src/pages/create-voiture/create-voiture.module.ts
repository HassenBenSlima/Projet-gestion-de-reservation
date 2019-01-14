import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateVoiturePage } from './create-voiture';

@NgModule({
  declarations: [
    CreateVoiturePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateVoiturePage),
  ],
})
export class CreateVoiturePageModule {}
