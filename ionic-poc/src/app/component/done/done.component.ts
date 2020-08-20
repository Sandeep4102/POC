import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PhotoService } from '../../services/photo.service'
import { AlertController } from '@ionic/angular';


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
    private photo: PhotoService,
    private alertController: AlertController
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
    this.payload = [{
      detail : this.regForm.value,
      imageURL: this.imageData,
      counter: 1
      }
    ]
    localStorage.setItem('employeeDetails', JSON.stringify(this.payload))
    this.presentAlert('Employee Added successfully')
  }


  async presentAlert(msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
}
