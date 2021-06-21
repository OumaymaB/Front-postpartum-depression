import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.page.html',
  styleUrls: ['./task-modal.page.scss'],
})
export class TaskModalPage implements OnInit {
  calendar={
    mode: 'month', 
    currentDate: new Date()
  }
  viewTitle: string;
  event={
    title: '',
    desc: '',
    startTime: null,
    endTime: null,
    allDay: true
  }
  modalReady=false;

  constructor( private modalCtrl: ModalController ) { }
ngOnInit(){}
  ngAfterViewInit(){
    setTimeout(()=>{
      this.modalReady=true;
    },0);  
  }
  save(){
    this.modalCtrl.dismiss({event: this.event})
  }
  onViewTitleChanged(title){
    this.viewTitle=title;
  }
  onTimeSelected(ev){
    this.event.startTime=new Date(ev.selectedTime);
  }
  close(){
    this.modalCtrl.dismiss();
  }
}
