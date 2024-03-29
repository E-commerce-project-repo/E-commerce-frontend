import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Label, Message, Button } from "../../globalStyles";
import { signUp } from "../../store/signup";
import { config } from "../../constants/constants";
import {
  FormGroup,
  Container,
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
  TermAndConditionWrapper,
  ButtonContainer,
  ButtonFile,
  File,
  Image,
} from "./signup.elements";
import { DoubleLoader } from "../../components/Loader/Loader";
import { CheckBox } from "../../components/MultipleComponents/Check";
import { Redirect } from "react-router";
export const SignUp = () => {
  const { loading, errors, success } = useSelector((state) => state.signup);

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    name: "",
    imageUrl: "",
    image: {},
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: event.target.value,
      name: user.firstName + user.lastName,
    });
  };
  const handleSubmit = () => {
    dispatch(signUp(user));
  };
  const handleImageChange = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    setUser({
      ...user,
      image: file,
      imageUrl: URL.createObjectURL(file),
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

            <LeftUserNameIcon />
          </FormGroup>
        </NameContainer>
        {errors.name ? (
          <FormGroup>
            <Message>{errors.name}</Message>
          </FormGroup>
        ) : null}

        <FormGroup>
          <ButtonContainer>
            <File type="file" onChange={handleImageChange} />
            <ButtonFile>Choose an Image</ButtonFile>
            {user.imageUrl ? <Image src={user.imageUrl} /> : null}
          </ButtonContainer>
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
        <Message>{errors.detail}</Message>

        <FormGroup>
          <TermAndConditionWrapper>
            <CheckBox />
            <TermAndCondition to="/term-and-condtion">
              Accept term and conditions
            </TermAndCondition>
          </TermAndConditionWrapper>
        </FormGroup>

        {loading ? (
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
