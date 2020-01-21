import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent   {
  profileForm = this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  })
  constructor(private fb: FormBuilder) { }

  

}
