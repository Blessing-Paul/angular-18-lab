import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  routeValue: any;
  subMenu: any;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.routeValue = this.route.snapshot.paramMap.get('id');
    this.subMenu = this.route.snapshot.paramMap.get('submenu');
    console.log(this.routeValue);
    console.log(this.subMenu);
  }
}
