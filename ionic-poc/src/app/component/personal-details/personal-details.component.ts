import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  Plugins, CameraResultType, Capacitor, FilesystemDirectory,
  CameraPhoto, CameraSource
} from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

import { PhotoService } from '../../services/photo.service'
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {

  @Input() regForm: FormGroup;

  public photos: any = {}
  // public isSubmitted: boolean = false


  constructor(
    private photo: PhotoService
  ) { }

  ngOnInit() { }
  step1Submitted() {
    this.regForm.get('personalDetails').get('id').markAsTouched();
    this.regForm.get('personalDetails').get('id').updateValueAndValidity();
    this.regForm.get('personalDetails').get('employee_name').markAsTouched();
    this.regForm.get('personalDetails').get('employee_name').updateValueAndValidity();
    this.regForm.get('personalDetails').get('employee_lastName').markAsTouched();
    this.regForm.get('personalDetails').get('employee_lastName').updateValueAndValidity();
    this.regForm.get('personalDetails').get('employee_email').markAsTouched();
    this.regForm.get('personalDetails').get('employee_email').updateValueAndValidity();
    this.regForm.get('personalDetails').get('employee_phone').markAsTouched();
    this.regForm.get('personalDetails').get('employee_phone').updateValueAndValidity();
    this.regForm.get('personalDetails').get('employee_current_address').markAsTouched();
    this.regForm.get('personalDetails').get('employee_current_address').updateValueAndValidity();
    this.regForm.get('personalDetails').get('employee_permanent_address').markAsTouched();
    this.regForm.get('personalDetails').get('employee_permanent_address').updateValueAndValidity();

    console.log(this.regForm.value, "formvalue");

  }
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.photos = {
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    }
    console.log(this.photos, "in service");
    this.photo.dataSource.next(this.photos)

  }
  addPhotoToGallery() {
    // this.photos = this.photoService.photos;
    // this.photoService.addNewToGallery();
    // console.log(this.photos, "photos");
    // console.log(this.photos[0].webviewPath, "web view");

    // this.regForm.get('personalDetails').get('imageURL').setValue(`${this.photos[0].webviewPath}`)
    // this.regForm.get('personalDetails').patchValue({ 'imageURL': `${this.photos[0].webviewPath}` });

  }
  remove() {
    this.photos = []
  }
}
