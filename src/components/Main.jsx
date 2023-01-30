import React from 'react';
import dummyContacts from "../dummyData";
import { useState } from "react";
import ContactList from '../ContactList';

const Main = () => {
  const [contacts, setContacts] = useState(dummyContacts);
  contacts.map(contact => {return contact.name});
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
         <ContactList contacts={contacts} />
      </div>
    </div>
  );
}

export default Main