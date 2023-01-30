import React, { useEffect } from 'react';
import dummyContacts from "../dummyData";
import { useState } from "react";
import ContactList from '../ContactList';

const Main = () => {
  const [contacts, setContacts] = useState([]);
  const getContacts = async () => {
    try {
      const response = await fetch('http://jsonplace-univclone.herokuapp.com/users')
      const data = await response.json();
      setContacts(data); 
    } catch (err) {
      console.log("We've encountered and error");
    }
  }
  useEffect(() => {  getContacts();}, []);
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