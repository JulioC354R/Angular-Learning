import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './data';
import { TasksComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;

  name = 'Nenhum selecionado';

  onSelectUser(id: string) {
    const user = DUMMY_USERS.find((user) => user.id === id);
    this.name = user?.name || 'Nenhum selecionado';
  }
}
