import { Component, signal } from '@angular/core';
import { UserInputComponent } from './user-input/user-input.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [UserInputComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App {
  protected readonly title = signal('investment-calculator');
}
