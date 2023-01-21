import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';

export const FormContact = styled(Form)`
  border: 1px solid black;
  border-radius: 5px;
  width: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const FormLable = styled.label`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
`;

export const FormInput = styled(Field)`
  padding: 5px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid gray;
  margin-bottom: 10px;
`;

export const FormButton = styled.button`
  width: 100px;
  padding: 5px;
  background-color: #35363a;
  border: 1px solid gray;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 14px;
  color: white;
  cursor: pointer;
`;

export const Error = styled(ErrorMessage)`
  color: red;
`;
