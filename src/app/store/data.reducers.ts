// Подключаем Экшены и тип экшенов
import { EDataActions, UserActions } from './data.actions';
// Подключаем интерфейс стейта и сам первоначальный стейт
import { IDataState, initialDataState } from './data.state';

// описываем работу редюсеров для редукса
export const dataReducers = (state = initialDataState, action: UserActions): IDataState => {
  switch (action.type) {
    // Добавление контакта в стейт
    case EDataActions.ADD_CONTACT: {
      const { contacts } = state;
      const person = action.payload;
      person.hobbies = [];
      contacts.push(person);
      return { ...state, contacts };
    }
    // Обновление контакта в стейте
    case EDataActions.UPDATE_CONTACT: {
      const { contacts } = state;
      const { contact, index } = action.payload;
      contacts.splice(index, 1, contact);
      return { ...state, contacts };
    }
    // Удаление контакта из стейта
    case EDataActions.DELETE_CONTACT: {
      const { contacts } = state;
      contacts.splice(action.payload, 1);
      return { ...state, contacts };
    }
    // Добавление тега к контакту
    case EDataActions.ADD_TAG_FOR_CONTACT: {
      const { contacts } = state;
      const { tag, contactIndex } = action.payload;

      let isNewTag = true;
      contacts[contactIndex].hobbies.forEach(selfTag => {
        if (selfTag === tag) isNewTag = false;
      });

      if (isNewTag) {
        contacts[contactIndex].hobbies.push(tag);
      }

      return { ...state, contacts };
    }
    // Добавление тега в стейт
    case EDataActions.ADD_TAG: {
      const { hobbies } = state;
      let isNewHobby = true;

      hobbies.forEach(hobby => {
        if (hobby === action.payload) {
          isNewHobby = false;
        }
      });

      if (isNewHobby) {
        hobbies.push(action.payload);
      }
      return { ...state, hobbies };
    }
    // Удаление тега из стейта
    case EDataActions.DELETE_TAG: {
      let { hobbies, contacts } = state;
      const deleteHobby = hobbies[action.payload];
      contacts.forEach(contact => {
        contact.hobbies.forEach((tag, i) => {
          if (tag === deleteHobby) {
            contact.hobbies.splice(i, 1);
          }
        });
      });
      hobbies.splice(action.payload, 1);
      return { ...state, hobbies, contacts };
    }

    default:
      return state;
  }
};
