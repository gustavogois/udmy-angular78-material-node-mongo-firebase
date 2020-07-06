import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname = "John";

  person = {
    firstname: "Gustavo",
    lastname: "Gois",
    age: 43,
    address: 'Odivelas'

  }

  constructor() { }

  ngOnInit(): void {
  }

}
