import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor() { }

  // private name="Gülben";
  // items = [
  //   "item1", "item2", "item3","item4"
  // ];

  // items: TodoItem[]=[
  //   interface ile kullanım
  //   {description:"Kahvaltı", action:"Yes"},
  //   {description:"Spor", action:"Yes"},
  //   {description:"Alışveriş", action:"No"},
  //   {description:"Ders", action:"Yes"}

  //   constructor ile kullanım
  //   new TodoItem("Kahvaltı","Yes"),
  //   new TodoItem("Spor","Yes"),
  //   new TodoItem("Alışveriş","No"),
  // ];
  
  // getName(){
  //   return this.name;
  // }

  model =new Model();

  displayAll:boolean=false;

  getItems(){
    if(this.displayAll){
      return this.model.items;
    }
    return this.model.items.filter(item => item.action==false)
  }

  getName(){
    return this.model.name;
  }

  // addItem(txtItem:any){
  //   console.log(txtItem.value);
  // }
  addItem(value:string){
    if(value!=""){
      this.model.items.push({description:value, action:false});
    }
    else{
      alert("Lütfen geçerli bir değer giriniz!")
    }
  }

  
}
