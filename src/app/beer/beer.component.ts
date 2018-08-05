import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer',
  // if you want to use a template file instead of inline template './beer.component.html'
  // `<h2> Welcome to the beer club {{ name }} </h2>
  // <h2> {{ 2 + 2 }} </h2> `,
  templateUrl: './beer.component.html' ,

  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  // name is a public property of my TS object
  public name = "Evie";

  // making a property of some data in the window
  public siteUrl = window.location.href;

  // property for a css ID. This is property binding
  public myId = "beer-id";

  // property for a CSS class
  public myClass = "beer-class";

  //property for a boolean value to disable input boxes
  public isDisabled = false;

  // property for a boolean value to activate a CSS class
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "btn-danger" : this.hasError,
    "btn-success" : !this.hasError,
    "btn-info" : this.isSpecial
  }
  public highlightColour = 'orange';


  // methods inside the object
  constructor() { }

  ngOnInit() {
  }

  // method to say hello! using the name specified in the object, this.name
  greetUser()
  {
    return "Greetings to you " + this.name;
  }
}
