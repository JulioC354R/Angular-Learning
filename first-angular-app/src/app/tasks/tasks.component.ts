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
  showForm = false;
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

  showCreateTaskForm() {
    this.showForm = true;
  }

  addTask() {
    const titleInput = document.getElementById('newTaskTittle') as HTMLInputElement;
    const title = titleInput.value || 'nada';
    const summaryInput = document.getElementById('newTaskSummary') as HTMLInputElement;
    const summary = summaryInput.value || 'nada';
    const dueDateInput = document.getElementById('newTaskDueDate') as HTMLInputElement;
    const dueDate = dueDateInput.value || 'nada';
    this.tasks.push({
      id: this.getTaskId(),
      userId: this.userId,
      title,
      summary,
      dueDate,
    });
    titleInput.value = '';
    summaryInput.value = '';
    dueDateInput.value = '';
    this.showForm = false;
  }

  getTaskId(): string {
    this.taskIdIndex = this.taskIdIndex + 1;
    return this.taskIdIndex.toString();
  }
}
