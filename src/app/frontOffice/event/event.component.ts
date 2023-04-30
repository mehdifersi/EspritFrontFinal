import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/core/Model/Event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
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

}
