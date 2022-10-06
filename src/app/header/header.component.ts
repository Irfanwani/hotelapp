import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title : string = '';


  constructor() { }


  @ViewChild('ref', {static: true}) ref!: ElementRef;
  
  ngOnInit(): void {
  }

}
