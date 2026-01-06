import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  imports: [BrowserModule, FormsModule],
  exports: [TasksComponent, TaskComponent, NewTaskComponent],
})
export class TasksModule {}
