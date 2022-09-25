import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hideRooms = false;

  hotelName = 'Hilton hotel';

  selectedRoom!: RoomList;

  rooms: Room = { totalRooms: 20, availableRooms: 10, bookedRooms: 5 };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe room',
      amenities: 'Free wifi, AC, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://www.pexels.com/photo/black-and-grey-bedspread-on-bed-and-pillow-164595/',
      checkinTime: new Date('11-sep-2022'),
      checkoutTime: new Date('30-sep-2022'),
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe room',
      amenities: 'Free wifi, AC, TV, Bathroom, Kitchen, Great View',
      price: 1000,
      photos:
        'https://www.pexels.com/photo/upholstered-bed-near-cabinet-262048/',
      checkinTime: new Date('11-aug-2022'),
      checkoutTime: new Date('30-aug-2022'),
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  newRoom: RoomList = {
    roomNumber: 3,
    roomType: 'Standard room',
    amenities: 'Free wifi, AC, TV, Bathroom, Kitchen',
    price: 700,
    photos:
      'https://www.pexels.com/photo/black-and-grey-bedspread-on-bed-and-pillow-164595/',
    checkinTime: new Date('11-sep-2022'),
    checkoutTime: new Date('30-sep-2022'),
  };

  addRoom() {
    this.roomList = [...this.roomList, this.newRoom];
  }
}
