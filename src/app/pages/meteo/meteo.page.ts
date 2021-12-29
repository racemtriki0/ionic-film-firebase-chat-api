import { Component, OnInit,ViewChild  } from '@angular/core';
import { MeteoService } from 'src/app/services/meteo.service';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ModalController } from '@ionic/angular';
import { EventPage } from '../event/event.page';
@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {
  currentDate = new Date();
  currentMonth: string;
  newEvent = {
    title: '',
    description: '',
    imageURL: '',
    startTime: '',
    endTime: ''
  };
  allEvents = [];

  showAddEvent: boolean;


  constructor(public modalController: ModalController,public afDB: AngularFireDatabase) {
    this.loadEvent();
  }
  ngOnInit() {
  }
  

  addEvent() {
    this.afDB.list('Events').push({
      title: this.newEvent.title,
      imageURL: this.newEvent.imageURL,
      startTime:  this.newEvent.startTime,
      endTime: this.newEvent.endTime,
      description: this.newEvent.description
    });
    this.showHideForm();
  }
  
  onViewTitleChanged(title: string) {
    this.currentMonth = title;
  }
  showHideForm() {
    this.showAddEvent = !this.showAddEvent;
    
  }

  loadEvent() {
    this.afDB.list('Events').snapshotChanges(['child_added']).subscribe(actions => {
      this.allEvents = [];
      actions.forEach(action => {
        console.log('action: ' + action.payload.exportVal().title);
        this.allEvents.push({
          title: action.payload.exportVal().title,
          startTime:  new Date(action.payload.exportVal().startTime),
          endTime: new Date(action.payload.exportVal().endTime),
          description: action.payload.exportVal().description,
          imageURL: action.payload.exportVal().imageURL
        });
       
      });
    });
  }
  async onEventSelected(event: any) {
    console.log('Event: ' + JSON.stringify(event));
    const modal = await this.modalController.create({
      component: EventPage,
      componentProps: event
    });
    return await modal.present();
  }

  onTimeSelected(ev: any) {
    const selected = new Date(ev.selectedTime);
    this.newEvent.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.newEvent.endTime = (selected.toISOString());
  }
  
 }
