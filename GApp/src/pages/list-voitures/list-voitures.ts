import { Component, OnInit } from '@angular/core';
import { AlertController, IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { HttpResponse } from "@angular/common/http";

import { Voiture } from "../../model/voiture.model";
import { CreateVoiturePage } from "../create-voiture/create-voiture";
import { VoitureService } from "../../services/voiture.service";
import { Reservation } from '../../model/reservation.model';
import { AssignClientToreservationPage } from '../assign-client-toreservation/assign-client-toreservation';

/**
 * Generated class for the ListVoituresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-voitures',
  templateUrl: 'list-voitures.html',
})
export class ListVoituresPage implements OnInit {

  voitures: Voiture[];
  reservation: Reservation;
  dist: number;
  constructor(
    private voitureService: VoitureService,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ngOnInit(): void {

    this.loadAll();
    this.reservation = this.navParams.get('rsv');
    // console.log("this.reservation :" + this.reservation.lieuDestination);
    this.dist = Math.floor(100 + Math.random() * 900);
    //this.dist = (Math.random() + 100)

  }

  loadAll() {
    this.voitureService.findVoitures().subscribe((voitures: HttpResponse<Voiture[]>) => {

      this.voitures = voitures.body;
      const toast = this.toastCtrl.create({
        message: 'La liste des Voitures est chargé',
        duration: 3000
      });
      toast.present();

    });
  }

  createVoiture() {
    this.navCtrl.setRoot(CreateVoiturePage);
  }

  editVoiture(id: number) {
    this.navCtrl.setRoot(CreateVoiturePage, { 'id': id });
  }

  deleteVoiture(id: number) {
    const confirm = this.alertCtrl.create({
      title: 'Delete Voiture',
      message: 'Do you agree to delete voiture: ' + id,
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            // console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {

            this.voitureService.deleteVoiture(id).subscribe((response) => {

              this.voitures = this.voitures.filter((voiture: Voiture) => voiture.id != id);
              const toast = this.toastCtrl.create({
                message: 'Le voiture est supprimé: ' + id,
                duration: 3000
              });
              toast.present();
            });
          }
        }
      ]
    });
    confirm.present();
  }




  chooseAndContinue(id: number) {

    this.voitureService.findVoiture(id).subscribe((voiture: HttpResponse<Voiture>) => {

      this.reservation.voiture = voiture.body;

      console.log("voiture reservation : " + this.reservation.voiture.maxBagages);

      const toast = this.toastCtrl.create({
        message: 'La voiture a été affecté',
        duration: 3000
      });
      toast.present();
      this.navCtrl.setRoot(AssignClientToreservationPage, { 'rsvAndVoiture': this.reservation });
    });


  }


}
