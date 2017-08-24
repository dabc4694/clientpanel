import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Client } from '../components/models/client';

@Injectable()
export class ClientService {

  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;

  constructor(
    private af:AngularFireDatabase
  ) { 
    this.clients = this.af.list('/client') as FirebaseListObservable<Client[]>;
  }

  getClients(){
    return this.clients;
  }

}
