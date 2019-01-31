import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  carlogin = "chauffeur.jpg";
  login: string;
  pwd: string;
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),

  });
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private clientService: ClientService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  signIn() {

    this.login = this.profileForm.value.username;
    this.pwd = this.profileForm.value.password;

    if ((this.login == 'admin') && (this.pwd == 'admin')) {
      this.clientService.userlogin = this.login;
      this.clientService.userpassword = this.pwd;

    }

    if ((this.login == 'client') && (this.pwd == 'client')) {
      this.clientService.userlogin = this.login;
      this.clientService.userpassword = this.pwd;
    }
    this.navCtrl.setRoot(HomePage);

  }

}
