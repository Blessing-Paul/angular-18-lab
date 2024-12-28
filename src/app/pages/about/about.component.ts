import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

 routerValue:any;

 constructor(private route:ActivatedRoute){

 }
  ngOnInit(): void {
    this.routerValue = this.route.snapshot.paramMap.get('id');
    console.log(this.routerValue);
  }
 
}
