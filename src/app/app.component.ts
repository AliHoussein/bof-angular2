import { Component } from '@angular/core';
import { Person } from './persons/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BoFs are awesome';

  onPersonClicked(person: Person): void {
    console.log(person);
  }

}
