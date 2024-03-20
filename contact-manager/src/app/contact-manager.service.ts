import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ContactManagerItems } from './ContactManagerItems';

@Injectable({
  providedIn: 'root'
})
export class ContactManagerService {
  httpClient = inject(HttpClient)
  constructor() { }
  getContacts(){return this.httpClient.get<ContactManagerItems[]>("http://localhost:5175/api/Contacts/GetContacts")}
}
