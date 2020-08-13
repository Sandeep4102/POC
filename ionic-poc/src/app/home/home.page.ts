import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { data } from './employeeData'
import { ActionSheetController, AlertController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, MaxLengthValidator } from '@angular/forms'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public editMode: boolean = false
  public addMode: boolean = false
  public IdReadOnly: boolean = false

  public employeeForm: FormGroup
  public isSubmitted: boolean = false
  public found: boolean = false
  public employeeRecord: any = []



  displayedColumns: string[] = ['id', 'employee_name', 'employee_email', 'employee_phone'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;




  constructor(
    private actionSheetController: ActionSheetController,
    private fb: FormBuilder,
    private alertController: AlertController,
    private navController: NavController
  ) {
    console.log(data, "DAta");
    this.employeeRecord = data
    this.dataSource.data = this.employeeRecord
    this.employeeForm = this.fb.group({
      "id": ['', Validators.required],
      "employee_name": ['', Validators.required],
      "employee_lastName": ['', Validators.required],
      "employee_email": ['', [Validators.required, Validators.email],],
      "employee_phone": ['', Validators.required],
      "employee_address": ['', Validators.required],
    })
  }
  get f() {
    return this.employeeForm.controls
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  async openActionSheet(c) {
    console.log('orderrrrrr', c);

    let viewOptions = [

      {
        text: 'edit ',
        icon: 'person',
        handler: () => {
          // console.log('openActionSheet', this.customizationsType);
          // this.navCtrl.navigateForward('/settings/customization-view/' + this.customizationsType + '/' + c._id)
          console.log('Begin Pick');
          this.editMode = true
          this.employeeRecord.forEach(element => {
            if (element.id === c.id) {
              this.IdReadOnly = true
            }
          });
          this.employeeForm.controls.id.setValue(`${c.id}`);
          this.employeeForm.controls.employee_name.setValue(`${c.employee_name}`);
          this.employeeForm.controls.employee_lastName.setValue(`${c.employee_lastName}`);
          this.employeeForm.controls.employee_email.setValue(`${c.employee_email}`);
          this.employeeForm.controls.employee_phone.setValue(`${c.employee_phone}`);
          this.employeeForm.controls.employee_address.setValue(`${c.employee_address}`);



        }
      },
      {
        text: 'Delete ',
        icon: 'trash',
        handler: () => {
          // this.viewClientDetails(c._id);
          // this.delete(c);
          console.log('Delete Pick');
          this.employeeRecord.forEach((element, index) => {
            if (element.id === c.id) {

              this.employeeRecord.splice(index, 1)
              this.dataSource.data = this.employeeRecord
              this.presentAlert('Success', "Employee Details Deleted Successfully")
            }
          });

        }
      },
    ];
    const actionSheet = await this.actionSheetController
      .create({
        header: 'Options',
        buttons: viewOptions
      });

    await actionSheet.present();
  }

  onSubmit() {
    this.isSubmitted = true
    if (this.employeeForm.valid) {

      console.log(this.employeeForm.value, "employee form value");
      console.log(this.employeeForm.controls.id.value, "value");

      this.employeeRecord.forEach(element => {
        if (element.id === this.employeeForm.controls.id.value) {
          this.found = true



        }
      });
      if (this.found == true) {

        console.log("already exists");
        if (this.addMode === true) {
          this.presentAlert('error', 'Employee With this id already exist')
        }
        if (this.addMode === false) {
          console.log(parseInt(this.employeeForm.controls.id.value), "in edit mode");

          this.employeeRecord.forEach((element, index) => {
            if (element.id === (this.employeeForm.controls.id.value)) {
              this.employeeRecord.splice(index, 1, this.employeeForm.value);
              this.dataSource.data = this.employeeRecord
              this.presentAlert('Success', "Employee Details Updated Successfully")

            }
          });
          // var replacedValue = this.employeeRecord.splice(parseInt(this.employeeForm.controls.id.value) - 1, 1, this.employeeForm.value);
          // console.log(replacedValue, "value");

          // this.dataSource.data = this.employeeRecord
        }

      }
      else if (this.found === false) {
        console.log("came here");

        this.employeeRecord.push(this.employeeForm.value)
        this.dataSource.data = this.employeeRecord
        this.presentAlert('success', 'Employee Details Added Successfully')



      }
    }
    else {
      console.log("here");

    }

  }
  cancel() {
    this.editMode = false
    this.isSubmitted = false
    this.found = false
    this.addMode = false
    this.employeeForm.reset()
  }
  add() {
    // this.editMode = true
    // this.addMode = true
    // this.IdReadOnly = false
    this.navController.navigateForward('/add')

  }

  async presentAlert(header, msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,

      message: msg,
      buttons: [{
        text: 'Ok',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
          this.cancel()
        }
      }]
    });

    await alert.present();
  }

}
