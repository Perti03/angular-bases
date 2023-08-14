import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

 public heroName:string[] = ['Black Widow','Thor','Hulk','Marvel Captain']

public deletedHero?:string;

 removeLastHero(): void{
  this.deletedHero = this.heroName.pop();
  
 }

}
