import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
              <h1>{{title}}</h1>
              <emp></emp>
              <div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first angular project';
}
