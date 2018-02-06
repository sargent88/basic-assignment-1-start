import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComponentWarnComponent } from './component-warn/component-warn.component';
import { ComponentSuccessComponent } from './component-success/component-success.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentWarnComponent,
    ComponentSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
