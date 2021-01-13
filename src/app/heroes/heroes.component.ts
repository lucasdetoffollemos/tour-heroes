
import { Component, OnInit } from '@angular/core';


import {Hero} from '../hero-interface/hero-interface.component';
import {HeroService} from '../services/hero.service';
import {MessageService} from '../services/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  
  public heroes: Hero[];
  public hero:Hero;
  public selectedHero: Hero;


  constructor(private heroService: HeroService, private messageService:MessageService) { }

  ngOnInit() {
  	this.heroFunction();
    this.onSelect(this.hero);
    this.getHeroes();
  }

  heroFunction(){
  	this.hero = {id:1, name: 'WindStorm'};
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
