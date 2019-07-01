import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { IDataState } from '../../store/data.state';

import { URL } from '../../route/urls';
import { AddTag, AddTagForContact, DeleteTag } from '../../store/data.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data$: Observable<IDataState>;
  URL$: typeof URL = URL;
  sortName: string;

  constructor(private _store: Store<IAppState>) {
    this.data$ = _store.pipe(select('data'));
  }

  ngOnInit() {
    this.sortName = '';
  }
  // Метод добавления тега
  handleAddTag(tag: string) {
    this._store.dispatch(new AddTag(tag));
    return false;
  }
  // Метод удаления тега
  handleDeleteTag(index: number) {
    this._store.dispatch(new DeleteTag(index));
  }
  // Метод добавления тега контакту
  handleAddTagForContact(event, tag: string) {
    // Функция проверки попали ли мы после дропа в блок контакта
    function searchParentDiv(element: any): string {
      if (element.className === 'contact') {
        return element.id.substring(3);
      }

      if (element.parentNode === null) {
        return '';
      } else {
        return searchParentDiv(element.parentNode);
      }
    }

    const element = document.elementFromPoint(event.clientX, event.clientY);
    const index = searchParentDiv(element);
    if (index) {
      this._store.dispatch(new AddTagForContact({ tag, contactIndex: Number(index) }));
    }
  }
  // Метод изменения сортировки по тегу
  handleChangeSort(value: string) {
    if (value === 'Все увлечения') {
      this.sortName = '';
    } else {
      this.sortName = value;
    }
  }
}
