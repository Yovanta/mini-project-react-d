import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import NotFoundIcon from "../assets/NotFound.icon";

export default function PageNotFound() {
  return (
    <WrapperNotFound>
      <WrapperImage>
        <NotFoundIcon />
      </WrapperImage>
      <WrapperButton>
        <Button>
          <Link to="/">RETURN TO HOME</Link>
        </Button>
      </WrapperButton>
    </WrapperNotFound>
  );
}

const WrapperNotFound = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  padding: 50px 0;
  background-color: #000;
  display: relative;
`;

const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #fff76a;
  color: #000;
  padding: 10px 30px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;
const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
`;
