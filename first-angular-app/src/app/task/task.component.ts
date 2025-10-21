import { Component, input, output } from '@angular/core';

@Component({
  templateUrl: './task.component.html',
  selector: 'app-task',
  standalone: true,
  imports: [],
})
export class TasksComponent {
  name = input<string>();
}
