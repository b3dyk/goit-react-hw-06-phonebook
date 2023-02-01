import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContactsAction } from 'redux/contacts.actions';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <input
      className={css.input}
      type="text"
      name="search"
      value={filter}
      placeholder="Search by name"
      onChange={evt =>
        dispatch(filterContactsAction(evt.target.value.toLowerCase()))
      }
    />
  );
};
