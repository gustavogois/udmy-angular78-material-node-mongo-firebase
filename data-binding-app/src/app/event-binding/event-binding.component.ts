import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "My button";
  btnEnable = true;
  spinnerMode = "determinate";
  selectDisabled = false;
  selectedOption = 1;
  inputName = "John";

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log('It works...');
  }

  disable() {
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setInterval(() => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    }, 3000);
  }

  cbChange(event) {
    console.log(event.checked);
    this.selectDisabled = event.checked;
  }

  selectionChange(event) {
    console.log(event);
    this.selectedOption = event.value;
  }

  inputEvent(event) {
    console.log(event);
  }

}
