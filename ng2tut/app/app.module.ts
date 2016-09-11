import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { routing } from './app.routing';

import { HeroService  }  from './hero.service';
import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
	imports: [ BrowserModule, FormsModule, routing ],
	providers: [ HeroService ],
	declarations: [ AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }

