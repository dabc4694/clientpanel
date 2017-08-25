import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../models/client';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMEssagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    // GET Id
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.clientService.getClient(this.id).subscribe(
      client => {
        if(client.balance > 0){
          this.hasBalance = true;
        }
        this.client = client;
        console.log(this.client);
      }
    );
  }

  updateBalance(id: string){
    this.clientService.updateClient(this.id, this.client);
    this.flashMEssagesService.show('Balance Updated!', {
      cssClass: 'alert-success',
      timeout: 5000
    });
    this.router.navigate(['/client/'+this.id]);
  }

}
