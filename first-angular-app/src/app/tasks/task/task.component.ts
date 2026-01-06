import { TaskService } from './../tasks.service';
import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  constructor(private tasksService: TaskService) {}
  @Input({ required: true }) task!: Task;

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
