import {Injectable} from '@angular/core';

import {HttpClient, HttpResponse} from '@angular/common/http';


import {Observable} from 'rxjs/Observable';
import {Voiture} from "../model/voiture.model";
import {SERVEUR_URL} from "../app/app.constants";

@Injectable()
export class VoitureService {

  resourceUrl = SERVEUR_URL + 'api/voitures';

  constructor(private http: HttpClient) {

  }

  findVoitures(): Observable<HttpResponse<Voiture[]>> {
    return this.http.get<Voiture[]>(this.resourceUrl, {observe: 'response'});
  }

  createVoiture(voiture: Voiture): Observable<HttpResponse<Voiture>> {

    return this.http.post<Voiture>(this.resourceUrl, voiture, {observe: 'response'});
  }

  updateVoiture(voiture: Voiture): Observable<HttpResponse<Voiture>> {

    return this.http.put<Voiture>(this.resourceUrl, voiture, {observe: 'response'});
  }

  findVoiture(id: number): Observable<HttpResponse<Voiture>> {
    return this.http.get<Voiture>(`${this.resourceUrl}/${id}`, {observe: 'response'});
  }

  deleteVoiture(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, {observe: 'response'});
  }
}
