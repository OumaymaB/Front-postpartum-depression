import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskModalPageRoutingModule } from './task-modal-routing.module';

import { TaskModalPage } from './task-modal.page';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskModalPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [TaskModalPage]
})
export class TaskModalPageModule {}
