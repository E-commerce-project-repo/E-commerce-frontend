import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  Label,
  Message,
  Button,
  SearchBoxContainer,
  SearchBox,
  CategoryIcon,
  LeftIcon,
  Select,
  Option,
  TextArea,
} from "../../globalStyles";
import { constants } from "../../constants/constants";
import { login, logout } from "../../store/user";
import * as FaIcons from "react-icons/fa";

import {
  FormGroup,
  Container,
  LeftPPriceIcon,
  LeftEmailIcon,
  LeftCategoryIcon,
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
  ImageContainer,
  Image,
  File,
  ButtonFile,
  CloseOnHover,
  CloseOnHoverContainer,
} from "./Add.elements";
import { validator, validateForm } from "../../errorHandler/errorHandler";
import { DoubleLoader } from "../Loader/Loader";
import { CheckBox } from "../MultipleComponents/Check";

export const AddItem = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [onhoverImage, setOnhoverImage] = useState(0);
  const [onhoverShow, setOnhoverShow] = useState(false);

  const dispatch = useDispatch();
  const [item, setItem] = useState({
    productName: "",
    subtitle: "",
    Category: "",
    price: 0.0,
    amount: 1,
    description: "",
    term: "",
    images: [],
  });
  const [errors, setErrors] = useState({
    productName: "",
    subtitle: "",
    Category: "",
    price: "",
    amount: "",
    description: "",
    term: "",
    images: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setItem({
      ...item,
      [name]: event.target.value,
    });
    setErrors({ ...errors, [name]: validator(name, value) });
  };
  const handleSubmit = () => {
    setShowLoader(true);
    setErrors({ ...errors, images: "You should select atleast 3 images" });

    if (validateForm(errors)) {
      dispatch(login({ item }));
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };
  const removeImage = (image) => {
    const newArray = item.images.filter((item) => {
      return item !== image;
    });
    console.log(newArray);

    setItem({
      ...item,
      images: newArray,
    });
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    setItem({
      ...item,
      images: item.images.concat({
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
            disabled={item.images.length >= 5 ? true : false}
          />
          <ButtonFile size={item.images.length}>Choose Images</ButtonFile>
        </ButtonContainer>

        {item.images.length < 4 ? (
          <Text>
            <Message>{errors.images}</Message>
          </Text>
        ) : null}

        <ImageContainer>
          {item.images.map((pic, index) => {
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
        <LoginHeader>Create an Item</LoginHeader>
        <FormGroup>
          <Label htmlFor="label">Product Name</Label>

          <Input
            id="label"
            placeholder="Product Name"
            value={item.productName}
            name="productName"
            onChange={handleChange}
          />

          <Message>{errors.productName}</Message>
        </FormGroup>
        <FormGroup>
          <Label>Subtitle</Label>

          <Input
            placeholder="Subtitle"
            value={item.subtitle}
            name="subtitle"
            onChange={handleChange}
          />
          <Message>{errors.subtitle}</Message>
        </FormGroup>

        <NameContainer>
          <FormGroup>
            <Label>Category</Label>
            <Select>
              <Option value="emdalk">Endalk belete</Option>
              <Option value="Abselom">Abselom</Option>
              <Option value="Hermela">Hermela</Option>
              <Option value="Betty">Betty</Option>
              <Option value="Natty">Natty</Option>
            </Select>
          </FormGroup>
          <NameGapper />
          <FormGroup>
            <Label>Price</Label>
            <Input
              placeholder="Price"
              value={item.price}
              type="number"
              name="price"
              onChange={handleChange}
            />
          </FormGroup>
        </NameContainer>
        <FormGroup>
          <NameContainer>
            <FormGroup>
              <Label>Amount</Label>
              <Input
                placeholder="Price"
                value={item.amount}
                type="number"
                name="amount"
                onChange={handleChange}
              />
            </FormGroup>
            <NameGapper />

            <FormGroup>
              <Label>Reorder treashold</Label>
              <Select>
                <Option value="emdalk">Endalk belete</Option>
                <Option value="Abselom">Abselom</Option>
                <Option value="Hermela">Hermela</Option>
                <Option value="Betty">Betty</Option>
                <Option value="Natty">Natty</Option>
              </Select>
            </FormGroup>
          </NameContainer>
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <TextArea
            placeholder="Description"
            value={item.description}
            name="description"
            onChange={handleChange}
            rows="4"
            cols="40"
          />
        </FormGroup>
        <FormGroup>
          <Label>Term and Condition</Label>
          <TextArea
            placeholder="Term and Condition"
            value={item.term}
            name="term"
            onChange={handleChange}
            rows="4"
            cols="50"
          />
        </FormGroup>
        <FormGroup>
          <TermAndConditionWrapper>
            <CheckBox />
            <TermAndCondition>Boost</TermAndCondition>
          </TermAndConditionWrapper>
        </FormGroup>
        <FormGroup />
        {showLoader ? (
          <DoubleLoader />
        ) : (
          <Button primary={true} onClick={handleSubmit}>
            Share
          </Button>
        )}
      </FormContainer>
    </Container>
  );
};
