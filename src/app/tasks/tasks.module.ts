import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksPageRoutingModule } from './tasks-routing.module';

import { TasksPage } from './tasks.page';
import { TaskModalPageModule } from './task-modal/task-modal.module';
import { NgCalendarModule } from 'ionic2-calendar';
import localeFr from '@angular/common/locales/fr-CD';
registerLocaleData(localeFr);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksPageRoutingModule,
    TaskModalPageModule,
    NgCalendarModule
  ],
  declarations: [TasksPage],
  providers:[
    {provide: LOCALE_ID, useValue:'fr-CD'}
  ]
})
export class TasksPageModule {}
