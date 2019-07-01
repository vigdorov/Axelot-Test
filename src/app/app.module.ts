import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './route/app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './screens/add-contact/add-contact.component';
import { EditContactComponent } from './screens/edit-contact/edit-contact.component';
import { HomeComponent } from './screens/home/home.component';
import { appReducers } from './store/app.reducers';
import { NotFoundComponent } from './screens/not-found/not-found.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    EditContactComponent,
    HomeComponent,
    NotFoundComponent,
    ContactListComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
