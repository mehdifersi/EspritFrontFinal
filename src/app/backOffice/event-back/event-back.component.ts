import { Component } from '@angular/core';
import { Event } from 'src/app/core/Model/Event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-back',
  templateUrl: './event-back.component.html',
  styleUrls: ['./event-back.component.css']
})
export class EventBackComponent {
  events : any[]=[]
  eventToadd : any = new Event();
    constructor(private servcie : EventService){
  
    }
    ngOnInit(): void {
    this.getAllEvent();
    }
    x : boolean = false
  openadd(){
    this.x = ! this.x
  
  }
    getAllEvent()
    {this.servcie.getEvent().subscribe(data => {
      this.events = data;
      console.log(this.events)
    })}
    addevent(){
      console.log(this.eventToadd);
      this.servcie
      .addEvent(this.eventToadd).subscribe()
      window.location.reload()
    }

    delete(id :any){
      this.servcie.delete(id).subscribe(data =>{
        this.getAllEvent();
      })
    }

    updateE(e :any)
    {
      this.updateEvent = e
    }

    updateEvent : any = new Event()
    update(){
this.servcie.update(this.updateEvent).subscribe(data => {
  this.getAllEvent();
})
    }
  
  }
  