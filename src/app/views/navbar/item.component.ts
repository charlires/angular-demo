import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'navbar-item',
  template: `
  <li class="nav-item active">
    <a routerLink="{{route}}" class="nav-link" href="#">{{text}}</a>
  </li>
  `,
  styles: [
  ]
})
export class ItemComponent implements OnInit {

  @Input() text: string
  @Input() route: string
  constructor() { }

  ngOnInit(): void {

  }

}
