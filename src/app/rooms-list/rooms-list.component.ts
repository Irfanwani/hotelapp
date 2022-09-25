import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { RoomList } from '../rooms/rooms';
@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // this will re-render the component only if anything instide it changes (note that omly immutable changes are detected i.e, changing state immutably by returing a new copy with new changes.)
})
export class RoomsListComponent implements OnInit, OnChanges {
  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  // ngOnChnages can only be used with the component having @Input event
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {}

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
