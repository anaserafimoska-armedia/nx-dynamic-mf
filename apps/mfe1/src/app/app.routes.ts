import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const appRoutes: Routes = [
    {
        path: '', component: HomeComponent, pathMatch: 'full'
    },
    { 
        path: 'booking', 
        loadChildren: () => import('./booking/booking.module')
            .then(m => m.BookingModule)
    }
];
