import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'list-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() name: string
  constructor() { }

  ngOnInit(): void {
  }

}
