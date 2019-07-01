// Подключаем интерфейс для экшенов
import { Action } from '@ngrx/store';
// Подключаем интерфейс карточки контакта
import { IPerson } from './data.state';
// Константы для экшенов редукса
export enum EDataActions {
  ADD_CONTACT = 'ADD_CONTACT',
  UPDATE_CONTACT = 'UPDATE_CONTACT',
  DELETE_CONTACT = 'DELETE_CONTACT',
  ADD_TAG_FOR_CONTACT = 'ADD_TAG_FOR_CONTACT',
  ADD_TAG = 'ADD_TAG',
  DELETE_TAG = 'DELETE_TAG',
}
// Экшн добавления контакта
export class AddContact implements Action {
  public readonly type = EDataActions.ADD_CONTACT;
  constructor(public payload: IPerson) {}
}
// Экшн обновления контакта
export class UpdateContact implements Action {
  public readonly type = EDataActions.UPDATE_CONTACT;
  constructor(public payload: { contact: IPerson; index: number }) {}
}
// Экшн удаления контакта
export class DeleteContact implements Action {
  public readonly type = EDataActions.DELETE_CONTACT;
  constructor(public payload: number) {}
}
// Экшн добавления тега для контакта
export class AddTagForContact implements Action {
  public readonly type = EDataActions.ADD_TAG_FOR_CONTACT;
  constructor(public payload: { tag: string; contactIndex: number }) {}
}
// Экшн добавления нового тега в список тегов
export class AddTag implements Action {
  public readonly type = EDataActions.ADD_TAG;
  constructor(public payload: string) {}
}
// Экшн удаления тега
export class DeleteTag implements Action {
  public readonly type = EDataActions.DELETE_TAG;
  constructor(public payload: number) {}
}
// Описываем тип экшенов, объединяем в один
export type UserActions = AddContact | UpdateContact | DeleteContact | AddTagForContact | AddTag | DeleteTag;
