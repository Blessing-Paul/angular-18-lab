import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MatCardModule,MatButtonModule,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'standaloneApp';
  subTitle = 'angular 18 tutorial';
  todayDate = new Date();
  salary = 1000;
  person = {"name": "Blessing"}
  number = 2;
}
