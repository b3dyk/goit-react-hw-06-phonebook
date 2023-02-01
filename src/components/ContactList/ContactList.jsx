import React, { useMemo } from 'react';
import css from './ContactList.module.css';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const visibleContacts = useMemo(
    () => contacts.filter(({ name }) => name.toLowerCase().includes(filter)),
    [contacts, filter]
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
