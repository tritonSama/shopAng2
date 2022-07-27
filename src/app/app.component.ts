import { Component } from '@angular/core';
import { Client } from './models/client';
import { ClientService } from './services/client.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client.UI';
  custs: Client[] = [];
  custToEdit?:Client;
  columnsToDisplay = ['firstName', 'lastName', 'email', 'phoneNumber', 'birthDate', 'button'];

  constructor(private clientService: ClientService) {}

  ngOnInit() : void{
    this.clientService
    .getClients()
    .subscribe((result: Client[]) => (this.custs = result));
  }

  updateCustList(custs: Client[]) {
    this.custs = custs
  }

  initNewCust() {
    this.custToEdit = new Client();
  }
  editCust(cust: Client) {
    this.custToEdit = cust;
  }
}
