import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {


  constructor(private _data:DataService) { 

  }

  ngOnInit(): void {
this.specialty=this._data.specialty()
  }
specialty:any=[]
doctor:any=[]
time:any=[]

onSlecet(special:any){
  this.doctor=this._data.doctor().filter(e=> e.id==special.target.value)
}
onSlecet2(doc:any){
  this.time=this._data.time().filter(x=> x.id2==doc.target.value)
}
// **************************************************************************
}
