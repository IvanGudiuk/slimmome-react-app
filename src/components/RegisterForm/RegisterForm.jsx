import { FormFields, RegisterFormStyled } from './RegisterForm.styled';
import {
  FormContainer,
  Caption,
  Label,
  ButtonContainer,
} from 'components/Form/Form.styled';
import Input from 'components/Form/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import ShowPassword from 'components/ShowPassword/ShowPassword';

const defaultFields = { username: '', email: '', password: '' };

export const RegisterForm = () => {
  const [fields, setFields] = useState(defaultFields);
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        username: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFields(fields => ({ ...fields, [name]: value }));
  };

  const navigate = useNavigate();
  const redirection = () => {
    const path = '/login';
    navigate(path);
  };

  const onClickHandler = () => {
    setPasswordShown(state => !state);
  };

  console.log(fields);
  return (
    <RegisterFormStyled>
      <FormContainer onSubmit={handleSubmit} autoComplete="off">
        <Caption>Register</Caption>
        <FormFields>
          <Label>Name *</Label>
          <Input
            type="text"
            name="username"
            value={fields.username}
            onChange={handleInputChange}
          />
          <Label>Email *</Label>
          <Input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleInputChange}
          />
          <Label>
            Password *
            <Input
              type={passwordShown ? 'text' : 'password'}
              name="password"
              value={fields.password}
              onChange={handleInputChange}
            />
            <ShowPassword
              clickHandler={onClickHandler}
              isShown={passwordShown}
            />
          </Label>
        </FormFields>
        <ButtonContainer>
          <Button
            className="white regLogbutton"
            type="submit"
            onClick={redirection}
          >
            Log In
          </Button>
          <Button className="orange regLogbutton" type="submit">
            Register
          </Button>
        </ButtonContainer>
      </FormContainer>
    </RegisterFormStyled>
  );
};
