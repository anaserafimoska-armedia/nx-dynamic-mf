import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking-search/booking.component';
import { RouterModule } from '@angular/router';
import { bookingRoutes } from './booking.routes';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(bookingRoutes)
  ]
})
export class BookingModule { }
