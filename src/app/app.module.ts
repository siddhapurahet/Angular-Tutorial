import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorComponent } from './author.component';
import { CourseComponent } from './courses.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
