import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavparComponent } from './navpar/navpar.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    NavparComponent,
    HomeComponent,
    ReservationComponent,

    NotfoundComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
