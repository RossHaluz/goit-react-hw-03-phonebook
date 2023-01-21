const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, number }) => {
        return (
          <li key={number}>
            <b>{name}</b>: {number}
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
