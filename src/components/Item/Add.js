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
  ImageContainer,
  Image,
  File,
  ButtonFile,
  CloseOnHover,
  CloseOnHoverContainer,
} from "./Add.elements";
import { validator, validateForm } from "../../errorHandler/errorHandler";
import { DoubleLoader } from "../Loader/Loader";

export const AddItem = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [onhoverImage, setOnhoverImage] = useState(0);
  const [onhoverShow, setOnhoverShow] = useState(false);

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    images: [],
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    images: "",
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
    setErrors({ ...errors, images: "You should select atleast 3 images" });

    if (validateForm(errors)) {
      dispatch(login({ user }));
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };
  const removeImage = (image) => {
    const newArray = user.images.filter((item) => {
      return item !== image;
    });
    console.log(newArray);

    setUser({
      ...user,
      images: newArray,
    });
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    setUser({
      ...user,
      images: user.images.concat({
        file: file,
        imageUrl: URL.createObjectURL(file),
      }),
    });
  };

  return (
    <Container>
      <TextWrap>
        <TextHeader>Add Image atleast 3 images for item</TextHeader>
        <Text>Max file size: 2mb, accepted: jpg png jpeg</Text>
        <ButtonContainer>
          <File
            type="file"
            onChange={handleImageChange}
            disabled={user.images.length >= 5 ? true : false}
          />
          <ButtonFile size={user.images.length}>Choose Images</ButtonFile>
        </ButtonContainer>

        {user.images.length < 4 ? (
          <Text>
            <Message>{errors.images}</Message>
          </Text>
        ) : null}

        <ImageContainer>
          {user.images.map((pic, index) => {
            return onhoverImage === index && onhoverShow === true ? (
              <CloseOnHoverContainer
                onMouseLeave={() => {
                  setOnhoverImage(index);
                  setOnhoverShow(false);
                }}
              >
                <CloseOnHover
                  onMouseLeave={() => {
                    setOnhoverImage(index);
                    setOnhoverShow(false);
                  }}
                  onClick={() => removeImage(pic)}
                />
              </CloseOnHoverContainer>
            ) : (
              <Image
                src={pic.imageUrl}
                onMouseEnter={() => {
                  setOnhoverImage(index);
                  setOnhoverShow(true);
                }}
                onMouseLeave={() => {
                  setOnhoverImage(index);
                  setOnhoverShow(false);
                }}
              />
            );
          })}
        </ImageContainer>
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
            Share
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
