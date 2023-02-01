import { ADD_CONTACT, DELETE_CONTACT, FILTER } from './contacts.types';

export const addContactAction = payload => ({ type: ADD_CONTACT, payload });
export const filterContactsAction = payload => ({ type: FILTER, payload });
export const deleteContactAction = payload => ({
  type: DELETE_CONTACT,
  payload,
});
