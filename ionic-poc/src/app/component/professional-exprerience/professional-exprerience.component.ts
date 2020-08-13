import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-professional-exprerience',
  templateUrl: './professional-exprerience.component.html',
  styleUrls: ['./professional-exprerience.component.scss'],
})
export class ProfessionalExprerienceComponent implements OnInit {

  @Input() regForm: FormGroup;

  constructor() { }

  ngOnInit() { }
  step3Submitted() {
    this.regForm.get('professionalDetails').get('companyName').markAsTouched();
    this.regForm.get('professionalDetails').get('companyName').updateValueAndValidity();
    this.regForm.get('professionalDetails').get('from').markAsTouched();
    this.regForm.get('professionalDetails').get('from').updateValueAndValidity();
    this.regForm.get('professionalDetails').get('to').markAsTouched();
    this.regForm.get('professionalDetails').get('to').updateValueAndValidity();
    this.regForm.get('professionalDetails').get('designation').markAsTouched();
    this.regForm.get('professionalDetails').get('designation').updateValueAndValidity();

    console.log(this.regForm.value, "formvalue");

  }

}
