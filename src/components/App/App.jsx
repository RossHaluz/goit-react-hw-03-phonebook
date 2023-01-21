import React, { Component } from 'react';
import { Container, ContactsListTitle, PhonebookTitle } from './App.styled';
import ContactForm from 'components/AddContacts';
import ContactsList from 'components/ContactsList';
import FilterContacts from 'components/FilterContacts';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('saveContacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const saveContacts = localStorage.getItem('saveContacts');
    const contacts = JSON.parse(saveContacts);

    this.setState({ contacts });
  }

  getNewContact = ({ name, number, id }) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const findContact = this.state.contacts.find(
      user => user.name === contact.name && user.number === contact.number
    );

    if (findContact) {
      toast.error(`${contact.name} is already in contacts!`);
      return;
    } else {
      toast.success(`${contact.name} successfully added!`);
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  onChancheInputFilter = e => {
    const { value } = e.currentTarget;

    this.setState({ filter: value });
  };

  getFilterContacts = () => {
    const { filter, contacts } = this.state;

    const normilize = filter && filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normilize)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getFilterContacts();

    return (
      <Container>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm setContact={this.getNewContact} />
        <ContactsListTitle>Contacts</ContactsListTitle>
        <h3>Find contacts by name</h3>
        <FilterContacts
          inputValue={filter}
          changeFilterValue={this.onChancheInputFilter}
        />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
        <Toaster position="top-right" />
      </Container>
    );
  }
}

export default App;
