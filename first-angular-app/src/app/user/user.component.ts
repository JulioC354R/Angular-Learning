import { Component } from '@angular/core';
import { DUMMY_USERS } from '../data';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];

  get imagePath() {
    // getter é uma function pra retornar um valor para a tela

    return '/users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    this.selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
  }
}
