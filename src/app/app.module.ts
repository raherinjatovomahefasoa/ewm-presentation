import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { UnderscoreToSpacePipe } from './underscore-to-space.pipe';
import { A1HelloComponent } from './a1-hello/a1-hello.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    UnderscoreToSpacePipe,
    A1HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
