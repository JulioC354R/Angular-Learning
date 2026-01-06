import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TasksComponent,
    HeaderComponent,
    CardComponent,
    NewTaskComponent,
    TaskComponent,
  ],
  imports: [DatePipe, BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
