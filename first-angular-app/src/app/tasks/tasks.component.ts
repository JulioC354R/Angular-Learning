import { Component, Input, input, output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTask } from './new-task/new-task';
import { CreatedTask } from './new-task/new-task.model';

@Component({
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTask],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  taskIdIndex = 0;
  tasks = [
    {
      id: this.getTaskId(),
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic features of Angular and How to Apply them.',
      dueDate: '31/12/2026',
    },
    {
      id: this.getTaskId(),
      userId: 'u2',
      title: 'Build first prototype',
      summary: 'Build a first prototype of online shop website',
      dueDate: '31/06/2026',
    },
    {
      id: this.getTaskId(),
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management.',
      dueDate: '31/09/2026',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(newTask: CreatedTask) {
    this.tasks.unshift({
      id: this.getTaskId(),
      userId: this.userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date,
    });

    this.isAddingTask = false;
  }

  getTaskId(): string {
    this.taskIdIndex = this.taskIdIndex + 1;
    return this.taskIdIndex.toString();
  }
}
