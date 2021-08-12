import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookRoomComponent } from './rooms/book-room.component';
import { ContactComponent } from './bookNow/contact.component';
import { AboutComponent } from './about/about.component';
import { PayComponent } from './pay/pay.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookRoomComponent,
    ContactComponent,
    AboutComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
