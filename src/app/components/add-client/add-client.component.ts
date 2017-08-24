import { Component, OnInit } from '@angular/core';
import { Client } from '../../components/models/client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

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

  disableOnAdd:boolean = true;
  constructor(
    private flashMessageService: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Client, valid: boolean}){
    if(!valid){
      this.flashMessageService.show('Please fill in all the details', {cssClass:'alert-danger', timeout: 5000});
      this.router.navigate(['add-client']);
    } else{
      console.log(value);
    }
  }
}
