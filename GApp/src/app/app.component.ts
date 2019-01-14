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
import { AssignClientToreservationPage } from '../pages/assign-client-toreservation/assign-client-toreservation';
import { ClientService } from '../services/client.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {

  rootPage: any = HomePage;

  menus = [
    { title: 'Home', component: HomePage },
    { title: 'My Gallery', component: GalleryPage },
    { title: 'My Meteo', component: MeteoPage },
    { title: 'My Places', component: PlacesPage },
    { title: 'Create Client', component: CreateClientsPage },
    { title: 'List Clients', component: ListClientsPage },
    { title: 'Create Voiture', component: CreateVoiturePage },
    { title: 'List Voitures', component: ListVoituresPage },
    { title: 'Create Reservation', component: CreateReservationPage },
    { title: 'List Reservations', component: ListReservationsPage },
    { title: 'AssignClientToreservationPage', component: AssignClientToreservationPage },

  ];


  ngOnInit(): void {
    
    throw new Error("Method not implemented.");
  }






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

  onPage(m) {
    this.rootPage = m.component;
  }

}

