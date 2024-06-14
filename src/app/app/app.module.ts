import { NgModule } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';


@NgModule({
  imports: [
    BrowserModule,
    AppComponent
  ],
  declarations: [
 ],
 providers: [HttpClient, provideHttpClient()] // add it here
})
export class AppModule { }
