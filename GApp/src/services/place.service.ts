import {Injectable} from "@angular/core";
import {PLace} from "../model/place.model";
import {Storage} from "@ionic/storage";

@Injectable()
export class PlacesService {


  constructor(public storage: Storage) {

  }

  private places: Array<PLace> = [

    {title: "A"}, {title: "B"}, {title: "C"}

  ];


  addPlaces(place: PLace) {
    this.places.push(place);
    this.storage.set('places', this.places);
  }

  getAddPlaces() {

    return this.storage.get('places').then(data => {

      this.places = data != null ? data : [];
      return this.places;

    });
  }

}
