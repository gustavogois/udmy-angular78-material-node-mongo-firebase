import { TimerComponent } from './timer/timer.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  // @ViewChild(TimerComponent)
  @ViewChild('stopwatch2')
  private myTimer: TimerComponent;

  @ViewChild('myp')
  private myp: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.myTimer.start();
  }

  stop() {
    this.myTimer.stop();
  }

  clear() {
    this.myTimer.clear();
  }

  ngAfterViewInit(): void {
    console.log(this.myp);

  }

}
