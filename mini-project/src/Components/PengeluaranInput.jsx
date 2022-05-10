import React, { useState } from "react";
import styled from "@emotion/styled";
import {v4 as uuidv4} from 'uuid'
import { useDispatch } from "react-redux";
import { addExpenseAction } from "../redux-store/reducers";

export default function PengeluaranInput(props) {
  const [data, setData] = useState({
    jumlah: 0,
    notes: "",
    date: "",
  });

  const dispatch = useDispatch()

  const _handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const _handleSubmit = (e) => {
    if (data.jumlah !== 0 && data.notes !== "" && data.date !== "") {
      dispatch(addExpenseAction({
        id: uuidv4(),
        ...data
      }))
      setData({
        jumlah: 0,
        notes: "",
        date: "",
      })
    } else {
      alert("jumlah, notes, date tidak boleh kosong");
    }
  };

  const handleInputEnter = e => {
    if(e.key === "enter")
    _handleSubmit()
  }

  return (
    <WrapperInputPengeluaran>
      <WrapTitle>
        <h1>PENGELUARAN</h1>
      </WrapTitle>
      <ItemInput>
        <input type="number" name="jumlah"  placeholder="Rp." value={data.jumlah} onChange={_handleChange} />
        <input type="text" name="notes"  placeholder="Notes..." value={data.notes} onChange={_handleChange}/>
        <WrapButton>
          <input type="date" name="date" value={data.date} onChange={_handleChange} />
          <Button onClick={_handleSubmit} onKeyDown={handleInputEnter}>Tambah</Button>
        </WrapButton>
      </ItemInput>
    </WrapperInputPengeluaran>
  );
}

const WrapperInputPengeluaran = styled.div`
  border: 1px solid black;
  border-radius: 25px;
  padding: 20px 25px;
  align-items: center;
  width: 50%;
  box-shadow: 3px 3px #282c40;
  background-color: #fff;

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 10%;
  }
`;
const WrapTitle = styled.div`
 text-align: center;
 font-size: 2rem;
  font-weight: bold;
`
const ItemInput = styled.div`
  [type="number"],
  [type="text"] {
    display: block;
    margin: 15px 0;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    width: 100%;
  }
`;
const Button = styled.div`
  background-color: #fff76a;
  text-align: center;
  padding: 10px 0;
  width: 25%;
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 800px) {
    padding: 10px 0;
    width: 30%;
  }
  @media (max-width: 428px) {
    padding: 10px 0;
    width: 50%;
  }
`;

const WrapButton = styled.div`
  display: flex;
  column-gap: 10px;
  [type="date"] {
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
  }

  @media (max-width: 800px) {
    column-gap: 40%;
  }
  @media (max-width: 428px) {
    column-gap: 30px;
  }
`;
