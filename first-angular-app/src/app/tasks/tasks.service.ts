import { Injectable } from '@angular/core';
import { Task } from './new-task/new-task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  taskIdIndex = 0;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

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

  addTask(taskData: Task, userId: string) {
    const createdTask = {
      id: this.getTaskId(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    };

    this.tasks.unshift(createdTask);
    this.saveTasks(this.tasks);
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks(this.tasks);
  }

  private saveTasks(tasksList: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(tasksList));
  }
}
