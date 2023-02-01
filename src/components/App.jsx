import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#122236',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        marginTop: '16px',
        fontSize: '24px',
      }}
    >
      <h1 className={css.mainHeading}>Phonebook</h1>

      <ContactForm />

      <h2 className={css.heading}>Contacts</h2>

      <Filter />

      <ContactList />
    </div>
  );
};
