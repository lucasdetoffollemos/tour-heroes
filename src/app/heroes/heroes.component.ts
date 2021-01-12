import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero-interface/hero-interface.component';
import {HEROES} from '../mock-heroes/mock-heroes.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  
  public heroes = HEROES;
  public hero:Hero;
  public selectedHero: Hero;




  constructor() { }

  ngOnInit() {
  	this.heroFunction();
    this.onSelect(this.hero);
  }

  heroFunction(){
  	this.hero = {id:1, name: 'WindStorm'};
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
}
