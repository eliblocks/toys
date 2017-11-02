import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FilterPipe}      from './filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent, 
    FilterPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
