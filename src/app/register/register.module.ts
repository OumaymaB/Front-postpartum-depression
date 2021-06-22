import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
     { 
      path: '',
      component: RegisterPage
     }
    ]),
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {
}
