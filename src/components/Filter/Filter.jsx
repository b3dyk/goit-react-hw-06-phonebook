import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContactsAction } from 'redux/contacts.slice';
import { Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <Input
      type="text"
      name="search"
      value={filter}
      placeholder="Search by name"
      onChange={evt => dispatch(filterContactsAction(evt.target.value))}
    />
  );
};
