// Подключаем фейковые данные
import { hobbiesData, personData } from './false-date';
// Описываем интерфейс карточки контактов
export interface IPerson {
  name: string;
  nickname: string;
  surname: string;
  sex: string;
  birthday: string;
  hairColor: string;
  hobbies?: string[];
}
// Описываем интерфейс стейта
export interface IDataState {
  contacts: IPerson[];
  hobbies: string[];
}
// Инициализируем состояние стейта
export const initialDataState: IDataState = {
  contacts: personData,
  hobbies: hobbiesData,
};
