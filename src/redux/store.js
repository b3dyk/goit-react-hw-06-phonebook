import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';
import { contactsReducer } from './contacts.reducer';
import { FILTER } from './contacts.types';

const initState = {
  contacts: [],
  filter: '',
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, initState, enhancer);
