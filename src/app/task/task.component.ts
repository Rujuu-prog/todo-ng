import { Component, Input, Output, EventEmitter, Signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';

export interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [MatCheckboxModule, MatButtonModule, MatIconModule, NgFor],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() tasks!: Signal<Task[]>;
  @Output() toggleTaskStatus = new EventEmitter<number>(); // チェックボックス変更時に通知
  @Output() deleteTask = new EventEmitter<number>(); // 削除ボタンのクリックを通知

  trackTask(index: number, task: Task) {
    return task.name;
  }
}
