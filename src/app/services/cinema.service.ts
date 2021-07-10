import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  public host = 'http://localhost:8082';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  public getVilles(){
    return this.http.get(this.host + '/villes');
  }

  // tslint:disable-next-line:typedef
  getCinemas(v: any) {
    return this.http.get(v._links.cinemas.href);
  }

  // tslint:disable-next-line:typedef
  getsalles(c: any) {

    return this.http.get(c._links.salles.href);
  }


  // tslint:disable-next-line:typedef
  getProjection(salle) {
    const url = salle._links.projections.href.replace('{?projection}', '');
    return this.http.get(url + '?projection=p1');

  }

  // tslint:disable-next-line:typedef
  getTicketsPlaces(p) {
    const url = p._links.tickets.href.replace('{?projection}', '');
    return this.http.get(url + '?projection=ticketproj');
  }

  // tslint:disable-next-line:typedef
  payerTickets(dataForm: any) {
    return this.http.post(this.host + '/payerTickets', dataForm);
  }
}
