import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero-interface/hero-interface.component';
import {HeroService} from '../services/hero.service';


@Component({
  selector: 'app-component-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	heroes:Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  	this.getHeroes();

  } 

  getHeroes():void{
  	this.heroService.getHeroes().subscribe(heroes =>this.heroes = heroes.slice(1,5));
  }

}
