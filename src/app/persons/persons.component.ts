import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  person: Person = new Person("Bob", "OCTO");

  @Output() newClick: EventEmitter<Person> = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }

  clickButton(): void {
    console.log("Button clicked");
    this.newClick.emit(this.person);
  }

}
