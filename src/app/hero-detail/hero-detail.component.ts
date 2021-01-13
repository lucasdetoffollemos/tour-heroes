import { Component, OnInit, Input} from '@angular/core';
import {Hero} from '../hero-interface/hero-interface.component';

@Component({
  selector: 'app-hero-detail-component',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {

  @Input() hero:Hero;
  
  constructor() { }

  ngOnInit() {}

}
