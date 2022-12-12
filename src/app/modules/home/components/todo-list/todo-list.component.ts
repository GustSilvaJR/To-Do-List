import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public tasks: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]');

  constructor() { }

  public ngDoCheck(): void {
      if(this.tasks.length){
        this.tasks.sort((first, last) => Number(first.checked) - Number(last.checked));
        this.setLocalStorage();
      }
  }

  public deleteItemTaskList(id: number): void {
    if(this.tasks.length > 1){
      this.tasks.splice(id, 1);  
    }else{
      this.tasks = [];
      this.setLocalStorage();
    }
  }

  public deleteAllTaskList(): void {
    const confirm = window.confirm("Deseja realmente deletar tudo?");
    if (confirm) {
      this.tasks = []
    }
  }

  public setEmitTaskList(newTask:string){
    this.tasks.push(
      {
        task:newTask,
        checked:false
      }
    );
  }

  public validationInput(task:string, id:number){
    task = task.trim();
    if(task==""){
      var conf = window.confirm("Task vazia, deseja excluí-la?");
    }

    if(conf){
      this.deleteItemTaskList(id);
    } 
  }

  public setLocalStorage():void{
    localStorage.setItem('list', JSON.stringify(this.tasks));
  }

}
