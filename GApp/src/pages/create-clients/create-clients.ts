import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Client } from "../../model/client.model";
import { ClientService } from "../../services/client.service";
import { HttpResponse } from "@angular/common/http";
import { ListClientsPage } from "../list-clients/list-clients";
import { Reservation } from '../../model/reservation.model';

/**
 * Generated class for the CreateClientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-clients',
  templateUrl: 'create-clients.html',
})
export class CreateClientsPage implements OnInit {


  client: Client;
  reservation: Reservation;

  constructor(private clientService: ClientService,
    private navController: NavController,
    private navParams: NavParams,
    private toastCtrl: ToastController) {
  }

  ngOnInit() {

    this.client = new Client();

    const id = this.navParams.get('id');

    // Edit
    if (id !== undefined) {

      this.clientService.findClient(id).subscribe((client: HttpResponse<Client>) => {
        this.client = client.body;
      });
    }

    this.reservation = this.navParams.get('rsvAndVoiture');



  }

  save() {
    console.log(this.client);

    if (this.client.id === null) {
      this.clientService.createClient(this.client).subscribe((client: HttpResponse<Client>) => {

        const toast = this.toastCtrl.create({
          message: 'Le client est sauvegardé: ' + client.body.id,
          duration: 3000
        });
        toast.present().then(() => {
          this.navController.setRoot(ListClientsPage);
        });
      });
    } else {
      this.clientService.updateClient(this.client).subscribe((client: HttpResponse<Client>) => {

        const toast = this.toastCtrl.create({
          message: 'Le client est sauvegardé: ' + client.body.id,
          duration: 3000
        });
        toast.present().then(() => {
          this.navController.setRoot(ListClientsPage);
        });
      });
    }
  }

  reserve() {

  }
}
