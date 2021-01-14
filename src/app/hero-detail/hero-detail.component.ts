import { Component, OnInit, Input} from '@angular/core';
import {Hero} from '../hero-interface/hero-interface.component';

//Provides access to information about a route associated with a component that is loaded in an outlet.
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from '../services/hero.service';






@Component({
  selector: 'app-hero-detail-component',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {

  @Input() hero:Hero;
  
  constructor(
  	private route: ActivatedRoute,
  	private heroService: HeroService,
  	private location: Location
  	) { }

  ngOnInit() {
  	this.getHero();
  	
  }

  getHero(): void{
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(){
  	this.location.back();
  }

}
