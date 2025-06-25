import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ReversePipe } from '../custom/reverse.pipe';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReversePipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Angular Standalone Application ';
  subTitle = 'angular 18 tutorial';
  todayDate = new Date();
  salary = 1000;
  _obj = { name: 'Blessing' };
  number = 2;
  isDisabled = false;
  _class = 'active';
  _color = 'indigo';
  _font = '24';

  itShows = false;

  ticketInfo = [
    { id: '1', name: 'angular', color: 'green' },
    { id: '2', name: 'react', color: 'red' },
    { id: '3', name: 'vuejs', color: 'blue' },
  ];

  _view = 'home';

  changeTitle() {
    this.title = 'Stand Alone Application in Angular 18';
  }

  updateTitle(event: any) {
    this.title = event.target.value;
  }
}
