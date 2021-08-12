import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookRoomComponent } from './rooms/book-room.component';
import { ContactComponent } from './bookNow/contact.component';
import { HomeComponent } from './home/home.component';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'book',component:BookRoomComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'pay',component:PayComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
