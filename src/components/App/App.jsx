import ContactsList from 'components/ContactsList/ContactsList';
import FormAddContact from 'components/Form/Form';
import { Component } from 'react';
import { Container } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const setContact = localStorage.setItem(
        'phoneBook',
        JSON.stringify(this.state.contacts)
      );
      console.log(setContact);
    }
  }

  componentDidMount() {
    const saveContacts = localStorage.getItem('phoneBook');
    const parseContacts = JSON.parse(saveContacts);

    this.setState({ contacts: parseContacts });
  }

  onChangeForm = ({ name, number }) => {
    const newState = {
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [newState, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <FormAddContact onSubmit={this.onChangeForm} />
        <ContactsList contacts={contacts} />
      </Container>
    );
  }
}

export default App;
