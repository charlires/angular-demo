import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  navItems: NavItem[]
  constructor() { }

  disableAll() {
  }

  ngOnInit(): void {
    this.navItems = [
      new NavItem("Home", "/"),
      new NavItem("Link", "/link"),
      new NavItem("Text", "/text"),
    ]
  }
}

class NavItem {
  constructor(
    public text: string,
    public route: string,
  ) { }

}