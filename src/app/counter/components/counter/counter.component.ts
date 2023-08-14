import { Component } from "@angular/core";

@Component({

    selector: 'app-counter',
    template: `
    <h3>   Counter : {{ counter}} </h3>

<button (click)="this.increaseBy(+1)" >+1</button>
<button (click)="this.resetBy(counter)">reset</button>
<button (click)="this.decreaseBy(-1)">-1</button>
    ` 
})

export class CounterComponent {

public counter: number=10;


increaseBy (value:number): void
{
  this.counter=this.counter +1
}

decreaseBy (value:number): void
{
  this.counter=this.counter -1
}

resetBy (value:number): void
{
  this.counter= 10
}
    
}