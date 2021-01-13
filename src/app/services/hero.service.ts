import { Injectable } from '@angular/core';

import { Hero } from '../hero-interface/hero-interface.component';
import { HEROES } from '../mock-heroes/mock-heroes.component';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
  	//Send the message after fetching the heroes 
  	this.messageService.add('HeroService: fetched heroes');
  	return of(HEROES);
  }
}
