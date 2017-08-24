import { Component, OnInit } from '@angular/core';
import { Client } from '../../components/models/client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  }

  disableOnAdd: boolean = false;
  constructor(
    private flashMessageService: FlashMessagesService,
    private router: Router,
    private clientService: ClientService
  ) { }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value: Client, valid: boolean }) {
    if (this.disableOnAdd) {
      value.balance = 0;
    }
    if (!valid) {
      this.flashMessageService.show('Please fill in all the details', { cssClass: 'alert-danger', timeout: 5000 });
      this.router.navigate(['add-client']);
    } else {
      this.clientService.newClient(value);
      this.flashMessageService.show('New Client added', { cssClass: 'alert-success', timeout: 5000 });
      this.router.navigate(['/']);
    }
  }
}
