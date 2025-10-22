import { Component, input, output } from '@angular/core';
import { Task } from './task/task';

@Component({
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  selector: 'app-tasks',
  standalone: true,
  imports: [Task],
})
export class TasksComponent {
  name = input<string>();
}
