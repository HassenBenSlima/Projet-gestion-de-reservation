import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contact={
    name:'lamborghini',
    email:'lamborghini@gmail.com',
    photo:'assets/imgs/cars.png'
  }

  constructor(public navCtrl: NavController) {

  }

}
