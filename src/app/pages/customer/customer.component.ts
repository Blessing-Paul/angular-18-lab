import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer',
  imports: [RouterOutlet, RouterLink, MatButtonModule, FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  userinput = '';

  cannavigate(){
    if (this.userinput !== ''){
      if( confirm('changes will be lost. Do you want to continue')){
        return true;
      }else{
        return true;
      }
    }else{
      return true;
    }
  }
}
