// Подключаем редюсер для роутинга
import { RouterReducerState } from '@ngrx/router-store';
// Подключаем интерфейс даты приложения и ее базовое значение
import { IDataState, initialDataState } from './data.state';
// Описываем интерфейс стейта приложения
export interface IAppState {
  router?: RouterReducerState;
  data: IDataState;
}
// Инициализируем стейт
export const initialAppState: IAppState = {
  data: initialDataState,
};
