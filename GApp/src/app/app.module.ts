import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from "../pages/gallery/gallery";
import { MeteoPage } from "../pages/meteo/meteo";
import { PlacesPage } from "../pages/places/places";
import { HttpModule } from "@angular/http";
import { GalleryService } from "../services/gallery.service";
import { DetailImagePage } from "../pages/detail-image/detail-image";
import { PlacesService } from "../services/place.service";
import { NewPlacePage } from "../pages/new-place/new-place";
import { IonicStorageModule } from "@ionic/storage";
import { Geolocation } from "@ionic-native/geolocation";
import { DetailPlacePage } from "../pages/detail-place/detail-place";
import { Camera } from "@ionic-native/camera";
import { ListClientsPage } from "../pages/list-clients/list-clients";
import { CreateClientsPage } from "../pages/create-clients/create-clients";
import { ClientService } from "../services/client.service";
import { HttpClientModule } from "@angular/common/http";
import { VoitureService } from "../services/voiture.service";
import { ListVoituresPage } from "../pages/list-voitures/list-voitures";
import { CreateVoiturePage } from "../pages/create-voiture/create-voiture";
import { ListReservationsPage } from "../pages/list-reservations/list-reservations";
import { CreateReservationPage } from "../pages/create-reservation/create-reservation";
import { ReservationService } from "../services/reservation.service";
import { AssignClientToreservationPage } from '../pages/assign-client-toreservation/assign-client-toreservation';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacesPage,
    DetailImagePage,
    NewPlacePage,
    DetailPlacePage,
    ListClientsPage,
    CreateClientsPage,
    ListVoituresPage,
    CreateVoiturePage,
    ListReservationsPage,
    CreateReservationPage,
    AssignClientToreservationPage,
    LoginPage,
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__PlacesData',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacesPage,
    DetailImagePage,
    NewPlacePage,
    DetailPlacePage,
    ListClientsPage,
    CreateClientsPage,
    ListVoituresPage,
    CreateVoiturePage,
    ListReservationsPage,
    CreateReservationPage,
    AssignClientToreservationPage,
    LoginPage,
  ],
  providers: [
    StatusBar, GalleryService, PlacesService, Geolocation,
    SplashScreen, Camera, ClientService, VoitureService, ReservationService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {
}
