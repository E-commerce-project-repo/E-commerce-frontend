import React, { useState, useEffect } from "react";
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
import { login, logout } from "../../store/login";
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
  ButtonFile,
  TermAndConditionWrapper,
  ImageContainer,
  Image,
  File,
  CloseOnHover,
  CloseOnHoverContainer,
} from "./Add.elements";
import { DoubleLoader } from "../Loader/Loader";
import { CheckBox } from "../MultipleComponents/Check";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/item/item";
import * as categoryAction from "../../store/category";

export const AddItem = () => {
  const [onhoverImage, setOnhoverImage] = useState(0);
  const [onhoverShow, setOnhoverShow] = useState(false);
  const [image_error, setImageError] = useState(null);
  const { loading, errors, success } = useSelector((state) => state.item);
  const categoryPayload = useSelector((state) => state.category);
  const [item, setItem] = useState({
    name: "",
    quantity: 1,
    Category: "",
    price: "",
    items_in_stock: 1,
    description: "",
    TermAndCondition: "",
    condition: "",
    Properties: "",
    reorder_treshold: 1,
    item_images: [],
    owner: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setItem({
      ...item,
      [name]: event.target.value,
    });
  };
  const handleSubmit = () => {
    if (item.item_images.length >= 4) {
      dispatch(add(item));
    } else {
      setImageError(true);
    }
  };
  const removeImage = (image) => {
    const newArray = item.item_images.filter((item) => {
      return item !== image;
    });

    setItem({
      ...item,
      item_images: newArray,
    });
  };
  useEffect(() => {
    dispatch(categoryAction.category());
  }, []);

  const handleImageChange = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    const obj = {
      image: file,
      imageUrl: URL.createObjectURL(file),
    };
    setItem({
      ...item,
      item_images: [...item.item_images, obj],
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
            disabled={item.item_images.length >= 5 ? true : false}
          />
          <ButtonFile size={item.item_images.length}>Choose Images</ButtonFile>
        </ButtonContainer>

        {image_error && item.item_images.length < 4 ? (
          <Text>
            <Message>{"You should select atleast 3 images"}</Message>
          </Text>
        ) : null}
        <Text>
          <Message>{errors.item_images}</Message>
        </Text>

        <ImageContainer>
          {item.item_images.map((pic, index) => {
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
          <Label htmlFor="label">Title</Label>

          <Input
            id="label"
            placeholder="Product Name"
            value={item.name}
            name="name"
            onChange={handleChange}
          />

          <Message>{errors.name}</Message>
        </FormGroup>

        <FormGroup>
          <Label>Category</Label>
          <Select name="category" value={item.category} onChange={handleChange}>
            <Option>Select Category</Option>
            {categoryPayload.payload?.map((cat, index) => (
              <Option value={cat.id}>{cat.name}</Option>
            ))}
          </Select>
          <Message>{errors.category}</Message>
        </FormGroup>
        <FormGroup>
          <Label>Price</Label>
          <Input
            placeholder="Price"
            value={item.price}
            type="number"
            name="price"
            onChange={handleChange}
          />
          <Message>{errors.price}</Message>
        </FormGroup>
        <FormGroup>
          <Label>Condition</Label>
          <Input
            placeholder="condition"
            value={item.condition}
            name="condition"
            onChange={handleChange}
          />
          <Message>{errors.condition}</Message>
        </FormGroup>
        <FormGroup>
          <Label>Item in Stack</Label>

          <Input
            placeholder="Item in Stock"
            value={item.items_in_stock}
            type="number"
            name="items_in_stock"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Reorder treashold</Label>

          <Input
            placeholder="Reorder treshold"
            value={item.reorder_treshold}
            type="number"
            name="reorder_treshold"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Properties</Label>

          <Input
            placeholder="Properties"
            value={item.Properties}
            name="Properties"
            onChange={handleChange}
          />
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
          <Message>{errors.description}</Message>
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
        {loading ? (
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
