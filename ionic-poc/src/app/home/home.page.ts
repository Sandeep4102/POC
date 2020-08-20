import { Component, OnInit, ViewChild } from '@angular/core';

import { data } from './employeeData'
import { ActionSheetController, AlertController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, MaxLengthValidator } from '@angular/forms'
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  employeeList : any
  displayedColumns: string[] = ['displayImage','id', 'employee_name', 'employee_email', 'employee_phone'];
  dataSource = new MatTableDataSource<any>([]);  

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;  
  constructor(
    private actionSheetController: ActionSheetController,
    private fb: FormBuilder,
    private alertController: AlertController,
    private navController: NavController
  ){}
  ngOnInit() {
  this.employeeList =[{

  }]
  this.dataSource.paginator = this.paginator;
  this.listEmployee()
  }

  listEmployee(){
   if(localStorage.getItem('employeeDetails')) {
     this.employeeList = JSON.parse(localStorage.getItem('employeeDetails'))
     console.log(this.employeeList,"employeeList");
     this.dataSource.data = this.employeeList
   }
  }


  add() {
  
    this.navController.navigateForward('/add')

  }

 

}
