import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
 private url = "Client"

  constructor(private http: HttpClient) { }

  public getClients() : Observable<Client[]> {
    
    return this.http.get<Client[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateClient(cust: Client) : Observable<Client[]> {
    return this.http.put<Client[]>(
      `${environment.apiUrl}/${this.url}`, 
      cust
    );
  }
  public createCust(cust: Client) : Observable<Client[]> {
    return this.http.post<Client[]>(
      `${environment.apiUrl}/${this.url}`, 
      cust
    );
  }
  public deleteCust(cust: Client) : Observable<Client[]> {
    return this.http.delete<Client[]>(
      `${environment.apiUrl}/${this.url}/${cust.id}`);
  }
}
