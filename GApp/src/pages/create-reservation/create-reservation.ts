import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpResponse } from "@angular/common/http";
import { Reservation } from "../../model/reservation.model";
import { ReservationService } from "../../services/reservation.service";
import { ListReservationsPage } from "../list-reservations/list-reservations";
import { Client } from "../../model/client.model";
import { ClientService } from "../../services/client.service";
import { Voiture } from "../../model/voiture.model";
import { VoitureService } from "../../services/voiture.service";
import { ListVoituresPage } from '../list-voitures/list-voitures';

/**
 * Generated class for the CreateReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-reservation',
  templateUrl: 'create-reservation.html',
})
export class CreateReservationPage implements OnInit {


  reservation: Reservation;
  clients: Client[];
  voitures: Voiture[];
  client: Client;
  voiture: Voiture;


  constructor(private reservationService: ReservationService,
    private navController: NavController,
    private navParams: NavParams,
    private toastCtrl: ToastController,
    private clientService: ClientService,
    private voitureService: VoitureService) {
  }

  ngOnInit() {

    this.reservation = new Reservation();

    const id = this.navParams.get('id');

    // Edit
    if (id !== undefined) {

      this.reservationService.findReservation(id).subscribe((reservation: HttpResponse<Reservation>) => {
        this.reservation = reservation.body;
      });
    }


    this.loadAllClients();

    this.loadAllVoitures();
  }

  loadAllVoitures() {
    this.voitureService.findVoitures().subscribe((voitures: HttpResponse<Voiture[]>) => {

      this.voitures = voitures.body;
    });
  }

  loadAllClients() {
    this.clientService.findClients().subscribe((clients: HttpResponse<Client[]>) => {

      this.clients = clients.body;

    });
  }

  save() {

    console.log(JSON.stringify(this.reservation.client));
    console.log(JSON.stringify(this.reservation.voiture));
    const a = JSON.stringify(this.reservation.client);
    const b = JSON.stringify(this.reservation.voiture);

    const client1 = JSON.stringify(a);
    const voiture1 = JSON.stringify(b);
    console.log("hassen: 1 " + client1);
    console.log("hassen: 2 " + voiture1);


    JSON.parse(client1, (key, value) => {
      if (key === 'id') {
        console.log("hassen: C " + key);
        return value;
      }
    });

    JSON.parse(voiture1, (key, value) => {
      if (key === 'id') {
        console.log("hassen: V " + key);
        return value;
      }
    });

    console.log(this.reservation);

    if (this.reservation.id === null) {
      this.reservationService.createReservation(this.reservation).subscribe((reservation: HttpResponse<Reservation>) => {

        const toast = this.toastCtrl.create({
          message: 'Le reservation est sauvegardé: ' + reservation.body.id,
          duration: 3000
        });

        toast.present().then(() => {
          this.navController.setRoot(ListVoituresPage, { 'idrsv': reservation.body.id });
          // this.navController.setRoot(ListReservationsPage);
        });
      });
    } else {
      this.reservationService.updateReservation(this.reservation).subscribe((reservation: HttpResponse<Reservation>) => {

        const toast = this.toastCtrl.create({
          message: 'Le reservation est sauvegardé: ' + reservation.body.id,
          duration: 3000
        });
        toast.present().then(() => {
          this.navController.setRoot(ListReservationsPage);
        });
      });
    }
  }




  calculePrix() {




    const toast = this.toastCtrl.create({
      message: 'la reservation a été fait de ' + this.reservation.lieuRDV + 'en' + this.reservation.dateReservation,
      duration: 3000
    });

    toast.present().then(() => {
      this.navController.setRoot(ListVoituresPage, { 'rsv': this.reservation });
    });

  }



}
