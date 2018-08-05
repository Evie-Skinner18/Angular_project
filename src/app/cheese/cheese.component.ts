import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.css']
})
export class CheeseComponent implements OnInit {

  // properties
  public greeting = " ";

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    this.greeting = "Roquefort!";

  }

}
