import { Component, computed, input, Input } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  //@Input({ required: true }) avatar!: string;
  //@Input({ required: true }) name!: string;

  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => {
    return '/users/' + this.avatar();
  });

  //get imagePath() {
  //  return '/users/' + this.avatar;
  //}

  onSelectUser() {}
}
