import { InputFilter } from './FilterContacts.styled';

const FilterContacts = ({ inputValue, changeFilterValue }) => {
  return (
    <InputFilter type="text" value={inputValue} onChange={changeFilterValue} />
  );
};

export default FilterContacts;
