import { Component, DoCheck } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-appmenu',
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './appmenu.component.html',
  styleUrl: './appmenu.component.css'
})
export class AppmenuComponent implements DoCheck{
  showMenu = false;

  constructor (private router:Router){}

  

  ngDoCheck(): void {
    let currentUrl = this.router.url
    if(currentUrl === "/login"){
      this.showMenu = false;
    }else {
      this.showMenu = true
    }
  }


}
