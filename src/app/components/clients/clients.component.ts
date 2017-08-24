import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../components/models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  totalOwed: number;
  clients: any[];
  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(
      clients => {
        this.clients = clients;
        this.getTotalOwed();
      }
    );

  }

  getTotalOwed() {
    let total = 0;
    for (var index = 0; index < this.clients.length; index++) {
      total += parseFloat(this.clients[index].balance);
    }
    this.totalOwed = total;
    console.log(this.totalOwed);
  }

}
