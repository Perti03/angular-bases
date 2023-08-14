import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

public name: string = "Ironman" ;

public age: number = 25 ;

get CapitalizedName():string{
  return this.name.toUpperCase();
}

getHeroDescription():string{
  return `${this.name} - ${this.age}`
}

changeName():void{
  this.name="Spyderman";
}

changeAge():void{
  this.age=35;
}

resetHero():void{
  this.name="Ironman";
  this.age=25;
}

}
