import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { ContactManagerItems } from './ContactManagerItems';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contact-manager';
  itemsList: ContactManagerItems[]=
  [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@mail.com",
      "phone": "+1-123-456-7890",
      "categoryID": 1,
      "category": {
        "id": 1,
        "name": "Friend"
      }
    },
    {
      "id": 2,
      "firstName": "Alice",
      "lastName": "Smith",
      "email": "alice.smith@mail.com",
      "phone": "+44-987-654-3210",
      "categoryID": 2,
      "category": {
        "id": 2,
        "name": "Family"
      }
    },
    {
      "id": 3,
      "firstName": "David",
      "lastName": "Brown",
      "email": "david.brown@mail.com",
      "phone": "+91-741-852-9630",
      "categoryID": 3,
      "category": {
        "id": 3,
        "name": "Work"
      }
    },
    {
      "id": 4,
      "firstName": "Emma",
      "lastName": "Johnson",
      "email": "emma.johnson@mail.com",
      "phone": "+61-800-123-456",
      "categoryID": 1,
      "category": {
        "id": 1,
        "name": "Friend"
      }
    },
    {
      "id": 5,
      "firstName": "Michael",
      "lastName": "Williams",
      "email": "michael.williams@mail.com",
      "phone": "+44-745-632-1987",
      "categoryID": 2,
      "category": {
        "id": 2,
        "name": "Family"
      }
    },
    {
      "id": 6,
      "firstName": "Sophia",
      "lastName": "Martinez",
      "email": "sophia.martinez@mail.com",
      "phone": "+1-555-123-4567",
      "categoryID": 3,
      "category": {
        "id": 3,
        "name": "Work"
      }
    }
  ]
}
