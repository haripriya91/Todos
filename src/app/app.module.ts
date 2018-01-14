import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';

const routes : Routes= [ {path:':status' , component:TodoComponent},
                         {path:'users'   , component: UserComponent },
                         {path:'userDetails/:userId',component: UserComponent}
                         {path:'**'      , redirectTo : '/all'}];


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
