import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.scss'],
})
export class EducationDetailsComponent implements OnInit {

  @Input() regForm: FormGroup;
  constructor() { }

  ngOnInit() { }
  step2Submitted() {
    this.regForm.get('educationalDetails').get('course').markAsTouched();
    this.regForm.get('educationalDetails').get('course').updateValueAndValidity();
    this.regForm.get('educationalDetails').get('college').markAsTouched();
    this.regForm.get('educationalDetails').get('college').updateValueAndValidity();
    this.regForm.get('educationalDetails').get('year').markAsTouched();
    this.regForm.get('educationalDetails').get('year').updateValueAndValidity();
    this.regForm.get('educationalDetails').get('percentage').markAsTouched();
    this.regForm.get('educationalDetails').get('percentage').updateValueAndValidity();

    console.log(this.regForm.value, "formvalue");

  }

}
