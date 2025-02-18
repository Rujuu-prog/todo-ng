import { Component, Input, Output, EventEmitter, Signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';

export interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [MatCheckboxModule, MatButtonModule, NgFor],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() tasks!: Signal<Task[]>; // `Signal<Task[]>` を親から受け取る
  @Output() toggleTaskStatus = new EventEmitter<number>(); // チェックボックスの変更を親に通知

  // trackBy メソッドを追加
  trackTask(index: number, task: Task) {
    return task.name; // タスクの一意な識別子を返す
  }
}
