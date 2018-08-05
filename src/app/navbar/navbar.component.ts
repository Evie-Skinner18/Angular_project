import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //properties

  constructor() { }

  ngOnInit() {
  }

  // method to display an alert when you click on Click me!
  clickMe()
  {
    alert("Hello from the navbar component!");
  }


}
