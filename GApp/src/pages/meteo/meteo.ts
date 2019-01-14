import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the MeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {

  meteo: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeteoPage');
  }


  onGetMeteo(dataForm) {
    let loading = this.loadingCtrl.create({
      content: "chargement des données ..."
    });
    loading.present();

    this.http.get("https://samples.openweathermap.org/data/2.5/forecast?q=" + dataForm.ville + "&appid=b6907d289e10d714a6e88b30761fae22")
      .map(resp => resp.json()).subscribe(data => {
      this.meteo = data;

      console.log(data);
      loading.dismiss();
    }, err => {
      loading.dismiss();
      console.log(err);
    });
  }

}
