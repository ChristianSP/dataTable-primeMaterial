import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';

  private myObject: Array<any> = [];

  constructor(){
    for(let i=0;i<25;i++){
      this.myObject.push({name: "Pablo", number: (Math.random()*100)/3.33})
    }
  }
}
