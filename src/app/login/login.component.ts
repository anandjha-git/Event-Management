import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showme: boolean = false;
  loginForm!: FormGroup;
  submitted = false;
  constructor(private frombulider: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.frombulider.group({
      email: ['',[Validators.required,Validators.email,Validators.pattern('Admin@gmail.com')]],
      password: ['',[Validators.required, Validators.pattern('Pass@1234')]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.router.navigate([`/dashboard`]);
  }
  get f() {
    return this.loginForm.controls;
  }
  hideComponent() {
    this.showme = !this.showme;
  }
}
