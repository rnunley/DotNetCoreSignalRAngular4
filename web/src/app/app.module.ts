import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HubConnectionFactory } from './services/HubConnectionFactory/hubconnectionfactory.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HubConnectionFactory
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
