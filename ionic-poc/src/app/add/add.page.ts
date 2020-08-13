import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public isSubmitted: boolean = false
  registrationForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'personalDetails': new FormGroup({
        "id": new FormControl(null, Validators.required),
        "employee_name": new FormControl(null, Validators.required),
        "employee_lastName": new FormControl(null, Validators.required),
        "employee_email": new FormControl(null, [Validators.required, Validators.email]),
        "employee_phone": new FormControl(null, Validators.required),
        "employee_current_address": new FormControl(null, Validators.required),
        "employee_permanent_address": new FormControl(null, Validators.required),
        "imageURL": new FormControl(null)
      }),
      'educationalDetails': new FormGroup({
        'course': new FormControl(null, Validators.required),
        'college': new FormControl(null, Validators.required),
        'year': new FormControl(null, Validators.required),
        'percentage': new FormControl(null, Validators.required),
      }),
      'professionalDetails': new FormGroup({
        'companyName': new FormControl(null, Validators.required),
        'from': new FormControl(null, Validators.required),
        'to': new FormControl(null, Validators.required),
        'designation': new FormControl(null, Validators.required),
      }),
      'socialDetails': new FormGroup({
        'linkdin': new FormControl(null, Validators.required),
        'facebook': new FormControl(null, Validators.required),
        'github': new FormControl(null, Validators.required),
      }),

    });
    // this.firstFormGroup = this._formBuilder.group({
    //   "id": ['', Validators.required],
    //   "employee_name": ['', Validators.required],
    //   "employee_lastName": ['', Validators.required],
    //   "employee_email": ['', [Validators.required, Validators.email],],
    //   "employee_phone": ['', Validators.required],
    //   "employee_current_address": ['', Validators.required],
    //   "employee_permanent_address": ['', Validators.required],
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }
  onSubmit() {
    // this.isSubmitted = true
    console.log(this.firstFormGroup.value, "value");

  }
}
