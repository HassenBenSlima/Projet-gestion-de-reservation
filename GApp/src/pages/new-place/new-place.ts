import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PLace} from "../../model/place.model";
import {PlacesService} from "../../services/place.service";
import {Geolocation} from "@ionic-native/geolocation";

/**
 * Generated class for the NewPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public  servicesService: PlacesService,
              public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }

  onAddPlace(place: PLace) {
    place.location = {longitude: 0, latitude: 0};
    place.timestamp = new Date().getTime();
    this.geolocation.getCurrentPosition().then(position => {
      place.location.longitude = position.coords.longitude;
      place.location.latitude = position.coords.latitude;
      this.servicesService.addPlaces(place);
      this.navCtrl.pop();

    }).catch(err => {
      place.location.longitude = 0;
      place.location.latitude = 0;
      this.servicesService.addPlaces(place);
      this.navCtrl.pop();
    });

  }

}
