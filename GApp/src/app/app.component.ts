import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { GalleryPage } from "../pages/gallery/gallery";
import { MeteoPage } from "../pages/meteo/meteo";
import { PlacesPage } from "../pages/places/places";
import { CreateClientsPage } from "../pages/create-clients/create-clients";
import { ListClientsPage } from "../pages/list-clients/list-clients";
import { ListVoituresPage } from "../pages/list-voitures/list-voitures";
import { CreateReservationPage } from "../pages/create-reservation/create-reservation";
import { CreateVoiturePage } from "../pages/create-voiture/create-voiture";
import { ListReservationsPage } from "../pages/list-reservations/list-reservations";
import { ClientService } from '../services/client.service';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {

  rootPage: any = LoginPage;
  interval;
  menus = [];
  logIn: string;
  passWord: string;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private clientService: ClientService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }



  ngOnInit(): void {
    this.startTimer()

    

  }

  onPage(m) {
    this.rootPage = m.component;
  }


  startTimer() {

    this.interval = setInterval(() => {
      this.logIn = this.clientService.userlogin;
      this.passWord = this.clientService.userpassword;
      console.log(this.logIn + " || " + this.passWord);


      if ((this.logIn == 'admin') && (this.passWord == 'admin')) {
        this.menus = [
          { title: 'Home', component: HomePage },
          { title: 'Create Client', component: CreateClientsPage },
          { title: 'List Clients', component: ListClientsPage },
          { title: 'Create car', component: CreateVoiturePage },
          { title: 'List cars', component: ListVoituresPage },
          { title: 'Create Reservation', component: CreateReservationPage },
          { title: 'List Reservations', component: ListReservationsPage },
          { title: 'Log out', component: LoginPage },
        ];
      }
  
      if ((this.passWord == 'client') && (this.logIn == 'client')) {
        this.menus = [
          { title: 'Home', component: HomePage },
          { title: 'My Gallery', component: GalleryPage },
          { title: 'My Meteo', component: MeteoPage },
          { title: 'My Places', component: PlacesPage },
          { title: 'Create Client', component: CreateClientsPage },
          { title: 'List Clients', component: ListClientsPage },
          { title: 'Create car', component: CreateVoiturePage },
          { title: 'List cars', component: ListVoituresPage },
          { title: 'Create Reservation', component: CreateReservationPage },
          { title: 'List Reservations', component: ListReservationsPage },
          { title: 'Log out', component: LoginPage },
  
        ];
      }

    }, 1000);
  }
}

