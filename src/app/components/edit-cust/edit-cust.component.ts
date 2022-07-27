import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-edit-cust',
  templateUrl: './edit-cust.component.html',
  styleUrls: ['./edit-cust.component.css']
})
export class EditCustComponent implements OnInit {
  @Input() cust?: Client;
  @Output() custsUpdated = new EventEmitter<Client[]>();

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }


  updateCust(cust:Client) {
    this.clientService
      .updateClient(cust)
      .subscribe((custs: Client[]) => this.custsUpdated.emit(custs));
  }

  
  createCust(cust:Client) {
    this.clientService
      .createCust(cust)
      .subscribe((custs: Client[]) => this.custsUpdated.emit(custs));
  }

  
  deleteCust(cust:Client) {
    this.clientService
      .deleteCust(cust)
      .subscribe((custs: Client[]) => this.custsUpdated.emit(custs));
  }

  

 
}
