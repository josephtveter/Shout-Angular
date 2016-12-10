import { Component } from '@angular/core';

@Component({
  selector: 'shout',
  template: `<h1>Hello {{name}}</h1>`
  
})
export class AppComponent  { name = 'Shout'; }

// templateUrl: 'modules/ui/templates/LoginScreen.html'
