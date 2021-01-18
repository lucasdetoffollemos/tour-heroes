import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero-interface/hero-interface.component';
import {HeroService} from '../services/hero.service';
import {Subscription} from 'rxjs';




@Component({
  selector: 'app-component-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})


export class DashboardComponent implements OnInit{
	public heroes:Hero[] = [];
  private getHeroes$Subscription: Subscription;
  private getHeroesSubscription: Subscription;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  	this.getHeroes();
   
  }

  getHeroes(){
     this.getHeroes$Subscription = this.heroService.getHero$().subscribe(heroes => {
      console.log('Heroes changed: ', heroes)
      this.heroes = heroes.slice(1,5)
    })
    
    this.getHeroesSubscription = this.heroService.getHeroes().subscribe();
  } 

  ngOnDestroy(){
    this.getHeroes$Subscription.unsubscribe();
    this.getHeroesSubscription.unsubscribe();
  }


  

  // ionViewWillEnter(){
    

  // }

  //getHeroes():void{
  //	this.heroService.getHeroes().subscribe(heroes =>this.heroes = heroes.slice(1,5));
  //}

}
