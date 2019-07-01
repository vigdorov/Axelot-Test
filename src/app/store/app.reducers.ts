// Подключаем функцию объединения редюсеров
import { ActionReducerMap } from '@ngrx/store';
// Подключаем редюсеры
import { routerReducer } from '@ngrx/router-store';
import { dataReducers } from './data.reducers';
// Подключаем интерфейс стейта
import { IAppState } from './app.state';

// Общий редюсер приложения
export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  data: dataReducers,
};
