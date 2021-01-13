import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroesPageRoutingModule } from './heroes-routing.module';

import { HeroesPage } from './heroes.page';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroesPageRoutingModule
  ],
  declarations: [HeroesPage, HeroesComponent, HeroDetailComponent]
})
export class HeroesPageModule {}
