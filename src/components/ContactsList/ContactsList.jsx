import {
  Contacts,
  ContactsItem,
  ContactsItemName,
  ContactsItemNumber,
  ContactBtnDelete,
} from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsItem key={id}>
            <ContactsItemName>{name}:</ContactsItemName>
            <ContactsItemNumber> {number}</ContactsItemNumber>
            <ContactBtnDelete type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </ContactBtnDelete>
          </ContactsItem>
        );
      })}
    </Contacts>
  );
};

export default ContactsList;
