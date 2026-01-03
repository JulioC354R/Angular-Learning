import { Injectable } from '@angular/core';
import { CreatedTask } from './new-task/new-task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  taskIdIndex = 0;

  private tasks = [
    {
      id: this.getTaskId(),
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic features of Angular and How to Apply them.',
      dueDate: '2026-06-31',
    },
    {
      id: this.getTaskId(),
      userId: 'u2',
      title: 'Build first prototype',
      summary: 'Build a first prototype of online shop website',
      dueDate: '2026-02-28',
    },
    {
      id: this.getTaskId(),
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management.',
      dueDate: '2026-12-31',
    },
  ];
  getTaskId(): string {
    this.taskIdIndex = this.taskIdIndex + 1;
    return this.taskIdIndex.toString();
  }
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: CreatedTask, userId: string) {
    this.tasks.unshift({
      id: this.getTaskId(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
