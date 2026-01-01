import { Component, Input, input, output } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = [
    {
      id: '1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic features of Angular and How to Apply them.',
      dueDate: '31/12/2026',
    },
    {
      id: '2',
      userId: 'u2',
      title: 'Build first prototype',
      summary: 'Build a first prototype of online shop website',
      dueDate: '31/06/2026',
    },
    {
      id: '3',
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
}
