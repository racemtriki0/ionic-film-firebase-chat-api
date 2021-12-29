import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.page.html',
  styleUrls: ['./actors.page.scss'],
})
export class ActorsPage implements OnInit {
  racem = true;
  condition=true;
  actors: any
  constructor(private actorService: ActorsService) {}
 
  ngOnInit() {
   
    this.actors = this.actorService.getactors();
  }

  onSwitch() {
    this.racem = !this.racem;
    this.condition = !this.condition;
  }

 
}
