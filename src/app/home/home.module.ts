import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HeroesComponent } from '../heroes/heroes.component'
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {MessagesComponent} from '../messages/messages.component';



import { HomePageRoutingModule } from './home-routing.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, HeroesComponent, HeroDetailComponent, MessagesComponent]
})
export class HomePageModule {}
