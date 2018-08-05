import { Component } from '@angular/core';

// metadata which connects app-root to custom html tags in index.html
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Component';
}
