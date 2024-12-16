import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './custom/reverse.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HomeComponent,
    ReversePipe,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'standaloneApp';
  subTitle = 'angular 18 tutorial';
  todayDate = new Date();
  salary = 1000;
  _obj = { name: 'Blessing' };
  number = 2;
  isDisabled = true;

  changeTitle() {
    this.title = 'Stand Alone Application in Angular 18';
  }

  updateTitle(event: any) {
    this.title = event.target.value;
  }
}
