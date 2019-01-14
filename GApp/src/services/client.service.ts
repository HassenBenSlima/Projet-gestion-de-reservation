import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { SERVEUR_URL } from "../app/app.constants";
import { Client } from "../model/client.model";

@Injectable()
export class ClientService {

  resourceUrl = SERVEUR_URL + 'api/clients';

  user = '';




  constructor(private http: HttpClient) {

  }

  findClients(): Observable<HttpResponse<Client[]>> {
    return this.http.get<Client[]>(this.resourceUrl, { observe: 'response' });
  }

  findClientByEmail(email: string): Observable<HttpResponse<Client>> {
    return this.http.get<Client>(`${this.resourceUrl}/mail?email=${email}`, { observe: 'response' });
  }

  createClient(client: Client): Observable<HttpResponse<Client>> {

    return this.http.post<Client>(this.resourceUrl, client, { observe: 'response' });
  }

  updateClient(client: Client): Observable<HttpResponse<Client>> {

    return this.http.put<Client>(this.resourceUrl, client, { observe: 'response' });
  }

  findClient(id: number): Observable<HttpResponse<Client>> {
    return this.http.get<Client>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  deleteClient(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
