import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IDataState } from '../../store/data.state';
import { IAppState } from '../../store/app.state';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  id: string;
  data$: Observable<IDataState>;

  constructor(private activateRoute: ActivatedRoute, private _store: Store<IAppState>) {
    this.id = activateRoute.snapshot.params['id'];
    this.data$ = _store.pipe(select('data'));
  }

  ngOnInit() {}
}
