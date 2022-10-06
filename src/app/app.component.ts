import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hotelapp';

  role = 'Admin';

  @ViewChild('ref', { static: true }) ref!: ElementRef;

  ngOnInit(): void {
    this.ref.nativeElement.innerText = 'This is the ref element';
  }
}
