import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { TaskModalPage } from './task-modal/task-modal.page';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  eventSource= [];
  viewTitle: string;
  calendar={
    mode: 'month',
    currentDate: new Date(),
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  next(){
    this.myCal.slideNext();
  }
  back(){
    this.myCal.slidePrev();
  }
  onViewTitleChanged(title){
    this.viewTitle=title;
  }
  createRandomEvents() {
    var events = [];
    for (var i = 0; i < 50; i += 1) {
        var date = new Date();
        var eventType = Math.floor(Math.random() * 2);
        var startDay = Math.floor(Math.random() * 90) - 45;
        var endDay = Math.floor(Math.random() * 2) + startDay;
        var startTime;
        var endTime;
        if (eventType === 0) {
            startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
            if (endDay === startDay) {
                endDay += 1;
            }
            endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
            events.push({
                title: 'All Day - ' + i,
                startTime: startTime,
                endTime: endTime,
                allDay: true
            });
        } else {
            var startMinute = Math.floor(Math.random() * 24 * 60);
            var endMinute = Math.floor(Math.random() * 180) + startMinute;
            startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
            endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
            events.push({
                title: 'Tâche- ' + i,
                startTime: startTime,
                endTime: endTime,
                allDay: false
            });
        }
    }
    return events;
}
loadEvents() {
  this.eventSource = this.createRandomEvents();
}
removeEvents(){
  this.eventSource=[];
}
async openTaskModal(){
  const modal= await this.modalCtrl.create({
    component: TaskModalPage,
    cssClass: 'cal-modal',
    backdropDismiss: false
  });
  await modal.present();

  modal.onDidDismiss().then((result)=>{
    if(result.data && result.data.event){
      let event = result.data.event;
      if(event.allDay){
        let start=event.startTime;
        event.startTime= new Date(
          Date.UTC(
            start.getUTCFullYear(),
            start.getUTCMonth(),
            start.getUTCDate()
          )
        );
        event.endTime= new Date(
          Date.UTC(
            start.getUTCFullYear(),
            start.getUTCMonth(),
            start.getUTCDate()
          )
        );
      }
      this.eventSource.push(result.data.event);
      this.myCal.loadEvents();
    }
  })
}
}
