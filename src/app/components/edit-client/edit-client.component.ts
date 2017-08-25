import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../models/client';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance:0
  };
  id: string;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
     this.id = this.route.snapshot.params['id'];

    this.clientService.getClient(this.id).subscribe(
      client => {
        this.client = client;

      }
    );
  }

  onSubmit({ value, valid }: { value: Client, valid: boolean }) {
    if (!valid) {
      this.flashMessagesService.show('Please fill in all the details', { cssClass: 'alert-danger', timeout: 5000 });
      this.router.navigate(['/edit-client/'+ this.id]);
    } else {
      this.clientService.updateClient(this.id, value);
      this.flashMessagesService.show('Client Updated', { cssClass: 'alert-success', timeout: 5000 });
      this.router.navigate(['/client/'+ this.id]);
    }
  }
}
