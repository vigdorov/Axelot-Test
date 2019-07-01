// Подключаем интерфейс контакта
import { IPerson } from './data.state';

// Фейк данные для карточек контактов
export const personData: IPerson[] = [
  {
    name: 'Джон',
    nickname: 'Незнайка',
    surname: 'Сноу',
    sex: 'Мужчина',
    birthday: '1985-01-10',
    hairColor: 'Черные',
    hobbies: ['футболл', 'музыкант', 'дайвер'],
  },
  {
    name: 'Дейнерис',
    nickname: 'Дыня Таргарян',
    surname: 'Таргариан',
    sex: 'Женщина',
    birthday: '1966-10-09',
    hairColor: 'Белые',
    hobbies: ['парашютный спорт', 'чтение'],
  },
  {
    name: 'Серсея',
    nickname: 'Мама Лена',
    surname: 'Ланнистер',
    sex: 'Женщина',
    birthday: '1941-05-23',
    hairColor: 'Светлые',
    hobbies: ['семьянин', 'политик', 'инженер'],
  },
  {
    name: 'Ария',
    nickname: 'Многоликая',
    surname: 'Старк',
    sex: 'Женщина',
    birthday: '1945-01-10',
    hairColor: 'Черные',
    hobbies: ['политик', 'дайвер'],
  },
  {
    name: 'Тирион',
    nickname: 'Хитрый жук',
    surname: 'Ланнистер',
    sex: 'Мужчина',
    birthday: '1989-11-10',
    hairColor: 'Темный',
    hobbies: ['парашютный спорт', 'инженер'],
  },
  {
    name: 'Джейме',
    nickname: 'Хаймэ',
    surname: 'Ланнистер',
    sex: 'Мужчина',
    birthday: '1978-05-23',
    hairColor: 'Светлые',
    hobbies: ['семьянин', 'чтение', 'инженер', 'политик'],
  },
];

// Фейк данные для тегов
export const hobbiesData: string[] = [
  'футболл',
  'музыкант',
  'парашютный спорт',
  'чтение',
  'семьянин',
  'политик',
  'инженер',
  'дайвер',
];
