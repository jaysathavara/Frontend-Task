import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-goodmorning',
  templateUrl: './goodmorning.component.html',
  styleUrls: ['./goodmorning.component.scss']
})
export class GoodmorningComponent {
goodmorningForm!: FormGroup;
  isSubmitted: boolean = false;

constructor(
  private formBuilder: FormBuilder,
  private title: Title
) {
  this.createForm();
  this.title.setTitle('Good Morning');
}

createForm() {
  this.goodmorningForm = this.formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required]
  })
}

onSubmit()
{
  if(this.goodmorningForm.valid) {
    console.log(this.goodmorningForm.value);
    this.isSubmitted = true;
  } else {
    this.goodmorningForm.markAllAsTouched();
    this.isSubmitted = false;
    console.log('Form is invalid');
  }
}
}