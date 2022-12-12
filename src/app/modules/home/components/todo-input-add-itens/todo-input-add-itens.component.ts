import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList:any = new EventEmitter();
  public newItemTaskList:string = ""; 

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList():void{
    //Retirando espaços no início e no fim
    this.newItemTaskList = this.newItemTaskList.trim();
    console.log(this.newItemTaskList);

    if(this.newItemTaskList!=""){
      this.emitItemTaskList.emit(this.newItemTaskList);
      this.newItemTaskList = "";
    }
  }
}
