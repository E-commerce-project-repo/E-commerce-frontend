import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/login";
import { Input, Label, Message, Button } from "../../globalStyles";
import {
  FormGroup,
  Container,
  LeftPhoneIcon,
  LeftEmailIcon,
  FormContainer,
  TextWrap,
  TextHeader,
  Text,
  ForgetPassword,
  LoginHeader,
  SignupLabel,
  SignupLink,
  SignupContainer,
} from "./Login.elements";
import { Redirect } from "react-router";
import { config } from "../../constants/constants";

import { DoubleLoader } from "../../components/Loader/Loader";
export const SignIn = (props) => {
  const dispatch = useDispatch();

  const { loading, errors, success } = useSelector((state) => state.login);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    dispatch(login(user));
  };
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: event.target.value,
    });
  };
  if (success) {
    return <Redirect to={config.home} />;
  }
  return (
    <Container>
      <TextWrap>
        <TextHeader>Why do you write in indian language?</TextHeader>
        <Text>
          hello world hello world hello world hello world hello world hello
          world hello world hello world hello world hello world hello world
          hello world hello world hello world hello world hello world hello
          world hello world hello world hello world
        </Text>
      </TextWrap>
      <FormContainer>
        <LoginHeader>Login</LoginHeader>
        <FormGroup>
          <Label>Username</Label>
          <Input
            placeholder="Username"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
          <Message>{errors.email}</Message>
          <LeftEmailIcon />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            placeholder="Password"
            value={user.password}
            name="password"
            onChange={handleChange}
          />
          <Message>{errors.password}</Message>
          <LeftPhoneIcon />
        </FormGroup>
        <Message>{errors.detail}</Message>

        <ForgetPassword to="/forget-password">Foget password?</ForgetPassword>

        {loading ? (
          <DoubleLoader />
        ) : (
          <Button primary={true} onClick={handleSubmit}>
            Login
          </Button>
        )}

        <SignupContainer>
          <SignupLabel>Don't have an account ?</SignupLabel>
          <SignupLink to="/sign-up">Sign up</SignupLink>
        </SignupContainer>
      </FormContainer>
    </Container>
  );
};
