import { Voiture } from "./voiture.model";
import { Client } from "./client.model";


export class Reservation {

  constructor(
    public id?: number,
    public dateReservation?: Date,
    public lieuDestination?: string,
    public lieuRDV?: string,
    public voiture?: Voiture,
    public client?: Client,
    public countOfPassenger?: number,
    public countOfLuggage?: number,

  ) {

  }
}
