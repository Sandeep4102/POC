import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPageRoutingModule } from './add-routing.module';

import { AddPage } from './add.page';
import { MatStepperModule } from '@angular/material/stepper'

import { PersonalDetailsComponent } from '../component/personal-details/personal-details.component'
import { EducationDetailsComponent } from '../component/education-details/education-details.component'
import { ProfessionalExprerienceComponent } from '../component/professional-exprerience/professional-exprerience.component'
import { SocialComponent } from '../component/social/social.component'
import { DoneComponent } from '../component/done/done.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MatStepperModule,
    AddPageRoutingModule
  ],
  declarations: [AddPage, PersonalDetailsComponent, EducationDetailsComponent, ProfessionalExprerienceComponent, SocialComponent, DoneComponent]
})
export class AddPageModule { }
