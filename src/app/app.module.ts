import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //tambahkan untuk menggunakan two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
