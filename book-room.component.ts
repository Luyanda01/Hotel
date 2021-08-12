import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
book=[
  {'id':1,'name':'Luxury Suit','description':'THE DETAILS : The suit has a king size bed,separate bathroom with bath and walk-in shower. The shutters open to view of the sea. STANDARD INCLUSIONS : Complimentary breakfast, complimentary full mini bar and snacks, high speed WiFi, in suite entertainment, use of spa hydro facilities, 24-hour  butler service','image':'assets/img/luxurysuit.jpg'},
  {'id':2,'name':'Maya luxury','description':'THE DETAILS : The suit has a king  size bed dressed with the worlds finest linens, a pillow menu, opulent robe and slippers. STANDARD INCLUSIONS : In suite check-in, breakfast, high speed WiFi, in suite entertainment, use of Spa hydro facilities,24-hour butler service,a bottle of sparkling wine on arrival, access to fitness center ','image':'assets/img/Maya luxury.jpg'},
  {'id':3,'name':'Presidential','description':'THE DETAILS : The suit has a king  size four-poster bed dressed with the worlds finest lineen and walk-in cupboards.The generous separate bathroom has a freestanding bath,walk-in shower. STANDARD INCLUSIONS :Breakfast, fully stocked mini bar and snacks,high speed WiFi, in suite entertainment, use of spa Hydro facilities,24-hour butler services, a bottle of Sparking wine on arrival. ','image':'assets/img/presidential.jpg'},
  {'id':4,'name':'Maya Presidential','description':'THE DETAILS : The suit has a king  size four-poster bed dressed with the worlds finest lineen and walk-in cupboards.The generous separate bathroom has a freestanding bath,walk-in shower. STANDARD INCLUSIONS :Breakfast, fully stocked mini bar and snacks,high speed WiFi, in suite entertainment, use of spa Hydro facilities,24-hour butler services, a bottle of Sparking wine on arrival, fully equipped butlers kitchen, airport pick-up and return transfer in Mercedes Benz E-Class vehicle','image':'assets/img/mayapresidentailsuit.jpg'},

]
}
