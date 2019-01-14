import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListVoituresPage } from './list-voitures';

@NgModule({
  declarations: [
    ListVoituresPage,
  ],
  imports: [
    IonicPageModule.forChild(ListVoituresPage),
  ],
})
export class ListVoituresPageModule {}
