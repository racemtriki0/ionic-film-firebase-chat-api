import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-actorapi',
  templateUrl: './actorapi.page.html',
  styleUrls: ['./actorapi.page.scss'],
})
export class ActorapiPage implements OnInit {
  Actor11: string ;
  Actorss: any;
  constructor( private Actservice:ActorsService) { }

  ngOnInit() {
  }

  ActorsInfo(){
    this.Actservice.getActorInfo(this.Actor11).subscribe(data=>{
      this.Actorss=data;
      console.log(data);

    },
    
    error =>{
      console.log(error);
    });

  }
}