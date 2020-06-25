import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  isHomeActive: boolean
  isLinkActive: boolean
  isTextActive: boolean
  constructor() { }

  disableAll() {
    this.isHomeActive = false
    this.isLinkActive = false
    this.isTextActive = false
  }

  ngOnInit(): void {
    this.isHomeActive = true
  }
}
