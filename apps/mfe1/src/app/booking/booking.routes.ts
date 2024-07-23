import { Routes } from "@angular/router";
import { BookingComponent } from "./booking-search/booking.component";

export const bookingRoutes: Routes = [
    {
        path: '',
        redirectTo: 'booking-search',
        pathMatch: 'full'
      },
    {
        path: 'booking-search',
        component: BookingComponent
    }
];