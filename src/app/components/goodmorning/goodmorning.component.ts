import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-goodmorning',
  templateUrl: './goodmorning.component.html',
  styleUrls: ['./goodmorning.component.scss']
})
export class GoodmorningComponent {
goodmorningForm!: FormGroup;
  isSubmitted: boolean = false;

constructor(
  private formBuilder: FormBuilder
) {
  this.createForm();
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