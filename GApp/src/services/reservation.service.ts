import {Injectable} from '@angular/core';

import {HttpClient, HttpResponse} from '@angular/common/http';


import {Observable} from 'rxjs/Observable';
import {SERVEUR_URL} from "../app/app.constants";
import {Reservation} from "../model/reservation.model";

@Injectable()
export class ReservationService {

  resourceUrl = SERVEUR_URL + 'api/reservations';

  constructor(private http: HttpClient) {

  }

  findReservations(): Observable<HttpResponse<Reservation[]>> {
    return this.http.get<Reservation[]>(this.resourceUrl, {observe: 'response'});
  }

  createReservation(reservation: Reservation): Observable<HttpResponse<Reservation>> {

    return this.http.post<Reservation>(this.resourceUrl, reservation, {observe: 'response'});
  }

  updateReservation(reservation: Reservation): Observable<HttpResponse<Reservation>> {

    return this.http.put<Reservation>(this.resourceUrl, reservation, {observe: 'response'});
  }

  findReservation(id: number): Observable<HttpResponse<Reservation>> {
    return this.http.get<Reservation>(`${this.resourceUrl}/${id}`, {observe: 'response'});
  }

  deleteReservation(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, {observe: 'response'});
  }
}
