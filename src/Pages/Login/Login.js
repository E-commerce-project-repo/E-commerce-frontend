import React, { useState, useEffect } from "react";
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

export const SignIn = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [mobile, setMobile] = useState("");
  const [show, setShow] = useState(false);

  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [companyErrorMessage, setCompanyErrorMessage] = useState("");
  const [mobileErrorMessage, setMobileErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const nameValidator = () => {
    var response = false;
    setShow(true);
    if (firstName.length < 1) {
      setFirstNameErrorMessage("First name is required field");
      response = true;
    } else if (!firstName.match(/^[A-Za-z][3,15]+$/) && firstName.length < 2) {
      setFirstNameErrorMessage("You have entered an invalid name.");
      response = true;
    } else {
      setFirstNameErrorMessage("");
    }
    if (lastName.length < 1) {
      setLastNameErrorMessage("Last name is required field");
      response = true;
    } else if (!lastName.match(/^[A-Za-z]+$/) && lastName.length > 2) {
      setLastNameErrorMessage("You have entered an invalid name.");
      response = true;
    } else {
      setLastNameErrorMessage("");
    }

    if (company.length < 1) {
      setCompanyErrorMessage("Company  is required field");
      response = true;
    } else {
      setCompanyErrorMessage("");
    }
    var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (mobile.length < 1) {
      setMobileErrorMessage("Mobile number is required field");
      response = true;
    } else if (!mobile.match(phone)) {
      setMobileErrorMessage("You have entered an invalid phone number.");
      response = true;
    } else {
      setMobileErrorMessage("");
    }

    if (email.length < 1) {
      setEmailErrorMessage("Email address is required field");
      response = true;
    } else if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setEmailErrorMessage("You have entered an invalid email address");
      response = true;
    } else {
      setEmailErrorMessage("");
    }

    return response;
  };
  const formValidator = () => {
    return nameValidator();
  };
  useEffect(() => {
    // props.onRef(formValidator);
  });

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
          <Label>Email</Label>
          <Input
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Message show={show}>{emailErrorMessage}</Message>
          <LeftEmailIcon />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            placeholder="Password"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <Message show={show}>{mobileErrorMessage}</Message>

          <LeftPhoneIcon />
        </FormGroup>
        <ForgetPassword to="/forget-password">Foget password?</ForgetPassword>
        <Button primary={true}>Login</Button>
        <SignupContainer>
          <SignupLabel>Don't have an account ?</SignupLabel>
          <SignupLink to="/sign-up">Sign up</SignupLink>
        </SignupContainer>
      </FormContainer>
    </Container>
  );
};
