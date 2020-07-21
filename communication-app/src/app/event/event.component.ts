import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  value: number = 0;
  title = 'Exemplo com Event';

  constructor() { }

  ngOnInit(): void {
  }

  incBy(event) {
    this.value += event;
  }

}
