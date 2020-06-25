import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styles: [
  ]
})
export class LinkComponent implements OnInit {

  todoList: string[]

  constructor() { }

  ngOnInit(): void {
    this.todoList = [
      "foo",
      "bar",
      "baz"
    ]
  }

}
