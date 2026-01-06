import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, UserComponent, HeaderComponent],
  imports: [SharedModule, TasksModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
