import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IPerson } from '../../store/data.state';
import { URL } from '../../route/urls';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/app.state';
import { UpdateContact } from '../../store/data.actions';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit, OnChanges {
  URL$: typeof URL = URL;

  @Input() contacts: IPerson[];
  @Input() sort: string;

  currentPage: number = 0;
  totalPages: number;
  sortIndex: number[];

  constructor(private _store: Store<IAppState>) {}

  sortContacts() {
    this.sortIndex = [];
    this.contacts.forEach((person, index) => {
      if (this.sort && person.hobbies.indexOf(this.sort) > -1) {
        this.sortIndex.push(index);
      } else if (!this.sort) {
        this.sortIndex.push(index);
      }
    });
    this.totalPages = Math.ceil(this.sortIndex.length / 3);
    const startIndex = this.currentPage * 3;
    const endIndex = Math.min(startIndex + 3, this.sortIndex.length);
    this.sortIndex = this.sortIndex.slice(startIndex, endIndex);
  }

  ngOnInit() {}

  ngOnChanges() {
    this.sortContacts();
    console.log('change');
  }

  handleDeleteTagContact(event, contact: IPerson, contactIndex: number, tagIndex: number) {
    event.stopPropagation();
    contact.hobbies.splice(tagIndex, 1);
    this._store.dispatch(new UpdateContact({ contact, index: contactIndex }));
  }

  handleChangePage(value) {
    this.currentPage = value;
    this.sortContacts();
  }
}
