import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { counterModule } from './counter/counter.module';
import { heroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';
import { CpersebComponent } from './cperseb/cperseb.component';







@NgModule({
  declarations: [
    AppComponent,
    CpersebComponent,
    
  ],
  imports: [
    BrowserModule,
    counterModule,
    heroesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
