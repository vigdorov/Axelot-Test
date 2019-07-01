// Подключаем нужные для angular компоненты
import { Component, Input, OnInit } from '@angular/core';
// Подключаем компоненты для роутинга
import { ActivatedRoute, Router } from '@angular/router';
// Подключаем константы урлов
import { URL } from '../../route/urls';
// Подключаем интерфейсы
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/app.state';
import { IPerson } from '../../store/data.state';
// Подключаем экшены для редукса
import { AddContact, DeleteContact, UpdateContact } from '../../store/data.actions';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  @Input() editMode: string;
  @Input() contact: IPerson;

  URL$: typeof URL = URL;
  form: IPerson;
  hint: IPerson;

  // инициализируем форму и сообщения об ошибке
  constructor(private store: Store<IAppState>, private router: Router) {
    this.form = {
      name: '',
      nickname: '',
      surname: '',
      sex: '',
      birthday: '',
      hairColor: '',
    };

    this.hint = {
      name: '',
      nickname: '',
      surname: '',
      sex: '',
      birthday: '',
      hairColor: '',
    };
  }

  // Если режим редактирования, то заполняем форму
  ngOnInit() {
    const { contact } = this;
    if (this.editMode) {
      this.form = {
        name: contact.name,
        nickname: contact.nickname,
        surname: contact.surname,
        sex: contact.sex,
        birthday: contact.birthday,
        hairColor: contact.hairColor,
      };
    }
  }

  // Если на инпут попал фокус, то удаляем сообщение об ошибке
  handleFocusInput(event) {
    const { name } = event.target;
    this.hint[name] = '';
  }
  // Метод добавления контакта
  handleAddContact() {
    const { form } = this;
    let checkForm = true;
    for (const inputName in form) {
      if (form[inputName].length === 0) {
        this.hint[inputName] = 'Заполните поле';
        checkForm = false;
      }
    }

    if (checkForm) {
      if (this.editMode) {
        this.store.dispatch(new UpdateContact({ contact: { ...form }, index: Number(this.editMode) }));
      } else {
        this.store.dispatch(new AddContact({ ...form }));
      }

      this.router.navigate([this.URL$.HOME]);
    }
    return false;
  }
  // Метод удаления контакта
  handleDeleteContact() {
    if (this.editMode) {
      this.store.dispatch(new DeleteContact(Number(this.editMode)));
    }
    this.router.navigate([this.URL$.HOME]);
  }
}
