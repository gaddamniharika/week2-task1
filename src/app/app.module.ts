import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftChild } from './leftchild/leftchild.component';
import { RightChild } from './rightchild/rightchild.component';
@NgModule({
  declarations: [
    AppComponent,LeftChild,RightChild
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
