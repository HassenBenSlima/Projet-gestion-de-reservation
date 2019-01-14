import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, ToastController} from 'ionic-angular';
import {HttpResponse} from "@angular/common/http";
import {Reservation} from "../../model/reservation.model";
import {ReservationService} from "../../services/reservation.service";
import {CreateReservationPage} from "../create-reservation/create-reservation";

/**
 * Generated class for the ListReservationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 **/

@IonicPage()
@Component({
  selector: 'page-list-reservations',
  templateUrl: 'list-reservations.html',
})
export class ListReservationsPage implements OnInit {

  reservations: Reservation[];

  constructor(
    private reservationService: ReservationService,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    public alertCtrl: AlertController) {
  }

  ngOnInit(): void {

    this.loadAll();
  }

  loadAll() {
    this.reservationService.findReservations().subscribe((reservations: HttpResponse<Reservation[]>) => {

      this.reservations = reservations.body;
      const toast = this.toastCtrl.create({
        message: 'La liste de la reservation est chargé',
        duration: 3000
      });
      toast.present();

    });
  }

  createReservation() {
    this.navCtrl.setRoot(CreateReservationPage);
  }

  editReservation(id: number) {
    this.navCtrl.setRoot(CreateReservationPage, {'id': id});
  }

  deleteReservation(id: number) {
    const confirm = this.alertCtrl.create({
      title: 'Delete Reservation',
      message: 'Do you agree to delete reservation: ' + id,
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

            this.reservationService.deleteReservation(id).subscribe((response) => {

              this.reservations = this.reservations.filter((reservation: Reservation) => reservation.id != id);
              const toast = this.toastCtrl.create({
                message: 'La reservation est supprimé: ' + id,
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

}
