import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { RemoteEntryComponent } from './remote-entry/entry.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    RemoteEntryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
