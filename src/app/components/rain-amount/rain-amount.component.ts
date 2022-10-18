import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rain-amount',
  templateUrl: './rain-amount.component.html',
  styleUrls: ['./rain-amount.component.css']
})
export class RainAmountComponent implements OnInit {

  public maxAmount:number|null=null;
  public speed:number|null=null;
  public time:number|null=null;
  public fullness:number|null=null;

  constructor() { }

  ngOnInit(): void {
  }

  public calculate(){
    if(this.maxAmount!=null && this.speed!=null && this.time!=null){
      this.fullness=Number((this.speed * this.time / this.maxAmount)*100);
    }
  }

}
