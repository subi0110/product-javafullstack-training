import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name : string;
  age : number;
  email : string;
  txtColor : string;
  constructor(){
    this.name = "subi";
    this.age = 20;
    this.email = "subitsharavichandran@gmail.com";
    this.txtColor = "olivegreen";
  }
   getAddition(a : number,b : number){
    let sum = a + b;
    return sum; 
   }
   changeName(){
    this.name="vetri";
   }

}
                                                      