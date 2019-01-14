import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';
import { ListReservationsPage } from '../list-reservations/list-reservations';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/client.model';
import { Reservation } from '../../model/reservation.model';
import { HttpResponse } from '@angular/common/http';
import { CreateClientsPage } from '../create-clients/create-clients';

/**
 * Generated class for the AssignClientToreservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assign-client-toreservation',
  templateUrl: 'assign-client-toreservation.html',
})
export class AssignClientToreservationPage implements OnInit {

  profileForm = new FormGroup({
    id: new FormControl(''),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    tel: new FormControl(''),
    email: new FormControl(''),
    nbrebagages: new FormControl(''),
    nbrepassagers: new FormControl(''),
    message: new FormControl(''),
  });

  check = false;
  reservation: Reservation;
  client: Client;
  maxp = false;
  maxb = false;
  nbrepersonnes: number;
  nbrebagages: number;
  placedispo: number;
  nbreplacebagagedispo: number;
  mail: string;

  constructor(
    private reservationService: ReservationService,
    private clientService: ClientService,
    private navController: NavController,
    private navParams: NavParams,
    private toastCtrl: ToastController,
    public alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.check == false;
    this.reservation = this.navParams.get('rsvAndVoiture');

    this.nbreplacebagagedispo = this.reservation.voiture.maxBagages;
    this.placedispo = this.reservation.voiture.maxPersonne;



  }


  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Do you want to add new client?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            console.log('Buy clicked');
            this.navController.setRoot(CreateClientsPage);
          }
        }
      ]
    });
    alert.present();
  }

  reserver() {
    this.mail = this.profileForm.value.email;
    console.log(" email client : " + this.mail);
    if (this.reservation.voiture.maxBagages < this.profileForm.value.countOfLuggage) {
      this.maxb = true;
      const toast = this.toastCtrl.create({
        message: 'verifier le nombre des bagages',
        duration: 6000
      });

      this.maxb = false;
      return;
    }

    if (this.reservation.voiture.maxPersonne < this.profileForm.value.countOfPassenger) {
      this.maxp = true;

      const toast = this.toastCtrl.create({
        message: 'verifier le nombre des personnes',
        duration: 6000
      });

      this.maxp = false;

      return;
    }

    this.reservation.countOfLuggage = this.profileForm.value.countOfLuggage;
    this.reservation.countOfPassenger = this.profileForm.value.countOfLuggage;


    this.clientService.findClientByEmail(this.mail).subscribe((client: HttpResponse<Client>) => {

      this.client = client.body;
      this.reservation.client = client.body;
      const toast = this.toastCtrl.create({
        message: 'Le client a été affecté: ',
        duration: 3000
      });
      toast.present().then(() => {
        // this.navController.setRoot(ListReservationsPage);
      });


      //console.log(" client : id " + this.reservation.client.id);
      if (this.reservation.client.id !== undefined) {

        this.reservationService.createReservation(this.reservation).subscribe((reservation: HttpResponse<Client>) => {




          const toast = this.toastCtrl.create({
            message: 'La reservation est sauvegardé ',
            duration: 3000
          });

          toast.present().then(() => {

            this.check = true;
            this.navController.setRoot(ListReservationsPage);

          });

        });
      }




      // voiture place --
      //update nombre de places de voiture




    });

    if (!this.check) {
      this.presentConfirm();

    }






  }
}
