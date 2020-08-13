import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent implements OnInit {

  @Input() regForm: FormGroup;

  constructor() { }

  ngOnInit() { }

  step3Submitted() {
    this.regForm.get('socialDetails').get('linkdin').markAsTouched();
    this.regForm.get('socialDetails').get('linkdin').updateValueAndValidity();
    this.regForm.get('socialDetails').get('facebook').markAsTouched();
    this.regForm.get('socialDetails').get('facebook').updateValueAndValidity();
    this.regForm.get('socialDetails').get('github').markAsTouched();
    this.regForm.get('socialDetails').get('github').updateValueAndValidity();


    console.log(this.regForm.value, "formvalue");

  }

}
