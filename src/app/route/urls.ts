import { Routes } from '@angular/router';

import { HomeComponent } from '../screens/home/home.component';
import { AddContactComponent } from '../screens/add-contact/add-contact.component';
import { EditContactComponent } from '../screens/edit-contact/edit-contact.component';
import { NotFoundComponent } from '../screens/not-found/not-found.component';
// Константы урлов
export enum URL {
  HOME = '',
  ADD_CONTACT = 'add-contact',
  EDIT_CONTACT = 'edit-contact',
  NOT_FOUND = '**',
}
// Описываем маршруты урлов
export const routes: Routes = [
  {
    path: URL.HOME,
    component: HomeComponent,
  },
  {
    path: URL.ADD_CONTACT,
    component: AddContactComponent,
  },
  {
    path: URL.EDIT_CONTACT + '/:id',
    component: EditContactComponent,
  },
  {
    path: URL.NOT_FOUND,
    component: NotFoundComponent,
  },
];
