
import { Component, OnInit} from '@angular/core';


import {Hero} from '../hero-interface/hero-interface.component';
import {HeroService} from '../services/hero.service';
import {MessageService} from '../services/message.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-component-heros',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  
  public heroes: Hero[];
  public hero:Hero;
  public selectedHero: Hero;
  private getHero$Subscription: Subscription;
  private getHeroesSubscription: Subscription;



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
    this.getHero$Subscription = this.heroService.getHero$()
    .subscribe(heroes =>this.heroes = heroes);

    this.getHeroesSubscription = this.heroService.getHeroes().subscribe();
  }

  add(name:string){
    name = name.trim();
    if(!name){ return; }
    this.heroService.addHero({name} as Hero)
    .subscribe(hero=>{
      this.heroes.push(hero);
    })
  }

  delete(hero:Hero):void{
    this.heroes = this.heroes.filter(h=> h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnDestroy(){
    this.getHero$Subscription.unsubscribe();
    this.getHeroesSubscription.unsubscribe();
  }

}
