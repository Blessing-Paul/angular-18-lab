import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppmenuComponent } from './appmenu/appmenu.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}
