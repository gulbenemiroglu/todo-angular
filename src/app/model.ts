import { TodoItem } from "./todoitem";

export class Model{
    name:string;
    items:TodoItem[];

    constructor(){
        this.name="WEEKLY";
        this.items=[
            {description:"Kahvaltı", action:true},
            {description:"Spor", action:true},
            {description:"Alışveriş", action:false},
            {description:"Ders", action:true}
        ]
    }
}
