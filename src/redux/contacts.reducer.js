import { nanoid } from 'nanoid';
import { ADD_CONTACT, DELETE_CONTACT } from './contacts.types';

export const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, { id: nanoid(), ...payload }];

    case DELETE_CONTACT:
      return state.filter(user => user.id !== payload);

    default:
      return state;
  }
};
