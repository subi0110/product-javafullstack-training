import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Empo{
  pname:string;
  pid:number;
  psalary:number;
}

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css'
})
export class StartPageComponent {
  name:string="";
  id:number|undefined;
  salary:number|undefined;
   empList:Empo[]=[
    {
      pname:"subi",
      pid:1,
      psalary:10000
    },
    
    {
      pname:"darun",
      pid:2,
      psalary:30000
    }
  ];
  isupdate:boolean=false;

  getEmpo(){
    var temp:Empo;
    temp={
      pname:this.name,
      pid:this.empList.length+1,
      psalary:Number(this.salary)
    }
    alert(temp.pid+" "+temp.pname+" "+temp.psalary);
    // this.empList.push(temp);
    this.clear()
  }

  removeEmpo(id:number){
    this.empList=this.empList.filter(data=>data.pid!==id);
  }
  index:number=0;
  updateTogglor(pid:number){

      this.index=this.empList.findIndex(data=>data.pid===pid);
      this.name=this.empList[this.index].pname;
      this.id=this.empList[this.index].pid;
      this.salary=this.empList[this.index].psalary

  }
  updateEmpo(){
    const empo:Empo={
      pid:this.id!,
      pname:this.name,
      psalary:this.salary!
    };
    this.empList[this.index]=empo
    this.clear()
  }
  clear(){
    this.id=undefined
    this.name=""
    this.salary=undefined;
  }
}