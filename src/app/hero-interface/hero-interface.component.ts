import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-interface',
  templateUrl: './hero-interface.component.html',
  styleUrls: ['./hero-interface.component.scss'],
})
export class HeroInterfaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}

export interface Hero{
	id : number;
	name : string;
}
