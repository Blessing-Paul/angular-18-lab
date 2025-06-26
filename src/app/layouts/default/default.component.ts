import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-default',
  standalone: false,
  templateUrl: './default.component.html',
  styleUrl: './default.component.css',
})
export class DefaultComponent {
  isMenuCollapsed = true;
}
