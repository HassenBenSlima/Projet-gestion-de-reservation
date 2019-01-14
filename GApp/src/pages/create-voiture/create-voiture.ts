import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {HttpResponse} from "@angular/common/http";
import {Voiture} from "../../model/voiture.model";
import {VoitureService} from "../../services/voiture.service";
import {ListVoituresPage} from "../list-voitures/list-voitures";

/**
 * Generated class for the CreateVoiturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-voiture',
  templateUrl: 'create-voiture.html',
})
export class CreateVoiturePage implements OnInit {

  voiture: Voiture;

  constructor(private voitureService: VoitureService,
              private navController: NavController,
              private navParams: NavParams,
              private toastCtrl: ToastController) {
  }

  ngOnInit() {

    this.voiture = new Voiture();

    const id = this.navParams.get('id');

    // Edit
    if (id !== undefined) {

      this.voitureService.findVoiture(id).subscribe((voiture: HttpResponse<Voiture>) => {
        this.voiture = voiture.body;
      });
    }
  }

  save() {
    console.log(this.voiture);

    if (this.voiture.id === null) {
      this.voitureService.createVoiture(this.voiture).subscribe((voiture: HttpResponse<Voiture>) => {

        const toast = this.toastCtrl.create({
          message: 'Le voiture est sauvegardé: ' + voiture.body.id,
          duration: 3000
        });
        toast.present().then(() => {
          this.navController.setRoot(ListVoituresPage);
        });
      });
    } else {
      this.voitureService.updateVoiture(this.voiture).subscribe((voiture: HttpResponse<Voiture>) => {

        const toast = this.toastCtrl.create({
          message: 'Le voiture est sauvegardé: ' + voiture.body.id,
          duration: 3000
        });
        toast.present().then(() => {
          this.navController.setRoot(ListVoituresPage);
        });
      });
    }
  }


}
