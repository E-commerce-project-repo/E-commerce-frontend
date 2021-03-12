import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/user";
import PropTypes from "prop-types";
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
import { validator, validateForm } from "../../errorHandler/errorHandler";
import { DoubleLoader } from "../../components/Loader/Loader";
export const SignIn = (props) => {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.user);
  const [showLoader, setShowLoader] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => {
    setShowLoader(true);
    if (validateForm(errors)) {
      dispatch(login({ user }));
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: event.target.value,
    });
    setErrors({ ...errors, [name]: validator(name, value) });
  };
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
            value={user.username}
            name="username"
            onChange={handleChange}
          />
          <Message>{errors.username}</Message>
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
        <ForgetPassword to="/forget-password">Foget password?</ForgetPassword>

        {showLoader ? (
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
