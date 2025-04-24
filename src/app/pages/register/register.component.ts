import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { Roles, users } from '../../model/LoginModel';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private builder: FormBuilder, private service: MasterService, private router:Router) {}

  // registerForm = new FormGroup({
  //   //when using properties or attributes:
  //   // username: new FormControl({value:'', disabled: true  }, Validators.required),

  //   username: new FormControl('', Validators.required),
  //   name: new FormControl('',Validators.compose([Validators.required, Validators.minLength(5)])),
  //   email: new FormControl('',Validators.compose([Validators.required, Validators.email])),
  //   role: new FormControl('salesman', Validators.required),
  //   gender: new FormControl('m'),
  //   terms: new FormControl(true),
  // });

  roles: Roles[] = [
    { value: 'salesman', viewValue: 'Salesman' },
    { value: 'supervisor', viewValue: 'Supervisor' },
    { value: 'manager', viewValue: 'Manager' },
  ];

  ngOnInit(): void {
    this.registerForm = this.builder.group({
      username: this.builder.control('', Validators.required),
      name: this.builder.control(
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      password: this.builder.control(
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      email: this.builder.control(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      role: this.builder.control('', Validators.required),
      gender: this.builder.control(''),
      terms: this.builder.control(''),
    });
  }

  proceedRegister() {
    if (this.registerForm.valid) {
      if(this.registerForm.value.terms){
        let data: users = {
          id: this.registerForm.value.username as string,
          name: this.registerForm.value.name as string,
          email: this.registerForm.value.email as string,
          password: this.registerForm.value.password as string,
          role: this.registerForm.value.role as string,
          gender: this.registerForm.value.gender as string,
        };
  
        this.service.proceedRegister(data).subscribe((item) => {
          alert("Registration Successful")
          this.router.navigateByUrl('/login')
        });
      }else {
        alert("Please agree to terms and conditions and then proceed")
      }
    }

    //assigning values to form input fields
    //this.registerForm.setValue({username:'admin', name:'blessing paul', email:'blessing@gmail.com'})
  }
}
