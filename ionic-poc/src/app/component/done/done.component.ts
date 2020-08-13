import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PhotoService } from '../../services/photo.service'


@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent implements OnInit {

  @Input() regForm: FormGroup;
  public payload: any = {}
  public imageData: any = {}

  constructor(
    private photo: PhotoService
  ) {


  }

  ngOnInit() {

  }

  submit() {
    this.photo.data.subscribe(data => {
      console.log(data, "in done component");
      this.imageData = data.webviewPath
    })
    console.log(this.regForm.value, "value");
    this.payload = {
      employeeDetails: this.regForm.value,
      imageURL: this.imageData,
      counter: 1
    }
    localStorage.setItem('employeeDetails', JSON.stringify(this.payload))

  }

}
