import { Component, signal, WritableSignal } from '@angular/core';
import { TaskComponent, Task } from '../task/task.component';
import { TaskInputComponent } from '../task-input/task-input.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TaskComponent, TaskInputComponent, MatCardModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  readonly tasks: WritableSignal<Task[]> = signal<Task[]>([]);

  addNewTask(name: string) {
    this.tasks.update(tasks => [...tasks, { name, completed: false }]);
  }

  toggleTask(index: number) {
    this.tasks.update(tasks => {
      tasks[index].completed = !tasks[index].completed;
      return [...tasks];
    });
  }
}
