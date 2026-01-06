import { Component, Input } from '@angular/core';
import { TaskService } from './tasks.service';

@Component({
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  selector: 'app-tasks',
  standalone: false,
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TaskService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
