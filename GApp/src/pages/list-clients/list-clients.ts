import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, ToastController} from 'ionic-angular';
import {HttpResponse} from "@angular/common/http";
import {ClientService} from "../../services/client.service";
import {Client} from "../../model/client.model";
import {CreateClientsPage} from "../create-clients/create-clients";


@IonicPage()
@Component({
  selector: 'page-list-clients',
  templateUrl: 'list-clients.html',
})
export class ListClientsPage implements OnInit {

  clients: Client[];

  constructor(
    private clientService: ClientService,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    public alertCtrl: AlertController) {
  }

  ngOnInit(): void {

    this.loadAll();
  }

  loadAll() {
    this.clientService.findClients().subscribe((clients: HttpResponse<Client[]>) => {

      this.clients = clients.body;
      const toast = this.toastCtrl.create({
        message: 'La liste de clients est chargé',
        duration: 3000
      });
      toast.present();

    });
  }

  createClient() {
    this.navCtrl.setRoot(CreateClientsPage);
  }

  editClient(id: number) {
    this.navCtrl.setRoot(CreateClientsPage, {'id': id});
  }

  deleteClient(id: number) {
    const confirm = this.alertCtrl.create({
      title: 'Delete Client',
      message: 'Do you agree to delete client: ' + id,
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

            this.clientService.deleteClient(id).subscribe((response) => {

              this.clients = this.clients.filter((client: Client) => client.id != id);
              const toast = this.toastCtrl.create({
                message: 'Le client est supprimé: ' + id,
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




