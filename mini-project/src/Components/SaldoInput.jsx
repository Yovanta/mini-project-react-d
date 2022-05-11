import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Tambah from '../assets/Tambah'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { addIncomeAction } from "../redux-store/reducers";

export default function SaldoInput(props) {
  const [saldo, setSaldo] = useState({
    jumlahSaldo: 0
  })
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch()

  console.log(saldo)

  const _handleInputChange = (e) => {
    setSaldo({
      ...saldo,
      [e.target.name]: e.target.value,
    })
  }
  
  const _handleAddNewSaldo = (e) => {
    e.preventDefault();
    if(saldo.jumlahSaldo){
      dispatch(addIncomeAction({
        id: uuidv4(),
        ...saldo
      }))

      setSaldo({
        jumlahSaldo: 0
      })
    } else {
      alert("Saldo tidak boleh kosong")
    }

    if(props.incomes?.length > 0 ) {
      return props.totalIncomes
    } else{
      return null;
    }
  }

  const handleBukaInput = () => {
    setIsOpen(false);
  };

  const handleTutupInput = () => {
    setIsOpen(true);
  };

  let viewMode = {};
  let editMode = {};

  if (isOpen) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  console.log(props.incomes);
  console.log(props.totalIncomes);
  
  // console.log(props.incomes.saldoByHome);

  return (
    <div>
    <WrapperTampilSaldo >
      <button onClick={handleBukaInput} style={editMode}><Tambah/></button>
      <h1 style={{display: 'flex', columnGap: '10px'}}>Saldo : {props.totalIncomes}</h1>
    </WrapperTampilSaldo>
      <WrapperInput>
        <div onSubmit={_handleAddNewSaldo} style={viewMode}>       
          <input type="number" name='jumlahSaldo' value={saldo.jumlahSaldo} onChange={_handleInputChange} placeholder="Rp. "/>
          <WrapButton>
            <Button onClick={_handleAddNewSaldo}>Tambah</Button>
            <Button onClick={handleTutupInput} style={{ marginLeft: "10px" }}> Selesai </Button>
          </WrapButton>
        </div>
      </WrapperInput>
    </div>
  )

}




const WrapperTampilSaldo = styled.div`
  display: flex;
  column-gap: 10px;
  padding-left: 10px;
  margin-bottom: 10px;
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 390px) {
    padding-left: 0;
  }
`
const WrapperInput = styled.div`
[type="number"]{
  display: block;
  margin: 15px 5px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  width: 80%;
}
`

const Button = styled.div`
  background-color: #fff76a;
  text-align: center;
  padding: 5px 0;
  width: 35%;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px 5px;

  @media (max-width: 390px) {
    width: 36%;
  }

`;

const WrapButton = styled.div`
  display: flex;
  column-gap: 5px
`;