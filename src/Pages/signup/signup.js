import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Label, Message, Button } from "../../globalStyles";
import { constants } from "../../constants/constants";
import { login, logout } from "../../store/user";

import {
  FormGroup,
  Container,
  LeftPhoneIcon,
  LeftEmailIcon,
  FormContainer,
  TextWrap,
  TextHeader,
  Text,
  TermAndCondition,
  LoginHeader,
  SignInLabel,
  SignInLink,
  SignInContainer,
  NameContainer,
  LeftUserNameIcon,
  NameGapper,
  LeftPasswordIcon,
  ButtonContainer,
  TermAndConditionWrapper,
  Checkbox,
} from "./signup.elements";
import { validator, validateForm } from "../../errorHandler/errorHandler";
import { DoubleLoader } from "../../components/Loader/Loader";

export const SignUp = () => {
  const [showLoader, setShowLoader] = useState(false);

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: event.target.value,
    });
    setErrors({ ...errors, [name]: validator(name, value) });
  };
  const handleSubmit = () => {
    setShowLoader(true);

    if (validateForm(errors)) {
      dispatch(login({ user }));
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  return (
    <Container>
      <TextWrap>
        <TextHeader>Why do you write in indian language?</TextHeader>
        <Text>
          hello world hello world hello world hello world hello world hello
          world hello world hello world hello world hello world hello world
          hello world hello world hello world hello world hello world hello
          world hello world hello world hello world world hello world hello
          world hello world
        </Text>
      </TextWrap>
      <FormContainer>
        <LoginHeader>Create an account</LoginHeader>
        <NameContainer>
          <FormGroup>
            <Label htmlFor="label">First Name</Label>
            <Input
              id="label"
              placeholder="First Name"
              value={user.firstName}
              name="firstName"
              onChange={handleChange}
            />
            <Message>{errors.firstName}</Message>
            <LeftUserNameIcon />
          </FormGroup>
          <NameGapper />
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              placeholder="Last Name"
              value={user.lastName}
              name="lastName"
              onChange={handleChange}
            />
            <Message>{errors.lastName}</Message>
            <LeftUserNameIcon />
          </FormGroup>
        </NameContainer>
        <FormGroup>
          <Label>Mobile Number</Label>
          <Input
            placeholder="Mobile Number"
            value={user.mobile}
            name="mobile"
            onChange={handleChange}
          />
          <Message>{errors.mobile}</Message>

          <LeftPhoneIcon />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            placeholder="Email Address"
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

          <LeftPasswordIcon />
        </FormGroup>
        <TermAndConditionWrapper>
          <Checkbox type="checkbox" />
          <TermAndCondition to="/term-and-condtion">
            Accept term and conditions
          </TermAndCondition>
        </TermAndConditionWrapper>

        {showLoader ? (
          <DoubleLoader />
        ) : (
          <Button primary={true} onClick={handleSubmit}>
            Create an account
          </Button>
        )}
        <SignInContainer>
          <SignInLabel>Don't have an account ?</SignInLabel>
          <SignInLink to="/sign-in">Sign in</SignInLink>
        </SignInContainer>
      </FormContainer>
    </Container>
  );
};
