import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output() select = new EventEmitter();

  get imagePath() {
    return '/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
