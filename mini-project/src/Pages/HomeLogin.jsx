import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import styled from '@emotion/styled'
import { useSelector} from 'react-redux'

import HeaderLogin from '../Components/HeaderLogin'
import SaldoInput from '../Components/SaldoInput'
import PengeluaranInput from '../Components/PengeluaranInput'
import ListPengeluaran from '../Components/ListPengeluaran'
import SaldoAkhir from '../Components/SaldoAkhir'

export default function HomeLogin() {
  // const [data, setData] = useState(initialValue)
  const expenses = useSelector(state => state.expenseReducer.expenses)

  const tambahPengeluaran = (newPengeluaran) => {
    const newData = {
      id: uuidv4(),
      ...newPengeluaran
    };
    console.log(newPengeluaran);
    setData((data) => [...data, newData])
  }
  console.log(expenses);

  const incomes = useSelector(state => state.incomeReducer.incomes)

  const tambahSaldo = (newSaldo) => {
    const newData = {
      id: uuidv4(),
      ...newSaldo
    };
    console.log(newSaldo);
    setSaldo((saldo) => [...saldo, newData])
  }
  console.log(incomes); 

  const totalIncomes = incomes?.map(item => item.jumlahSaldo).reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  console.log(totalIncomes);

  const totalPengeluaran = expenses?.map(item => item.jumlah).reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  console.log(totalPengeluaran) 

  return (
    <WrapperHomeLogin>
        <Home>
            <HeaderLogin/>
            <WrapperSaldo>
              <SaldoInput totalIncomes={totalIncomes} tambahSaldo={tambahSaldo} incomes={incomes}/>   
              <SaldoAkhir totalIncomes={totalIncomes} totalPengeluaran={totalPengeluaran}/>
            </WrapperSaldo>
            <WrapperPengeluaran>  
              <PengeluaranInput tambahPengeluaranByHome={tambahPengeluaran}/>
              <ListPengeluaran totalPengeluaran={totalPengeluaran} expensesByHome={expenses}/>
            </WrapperPengeluaran>
        </Home>
    </WrapperHomeLogin>
  )
}


const Home = styled.div`
  background-color: #d6e7ba;  
  margin: 20px;
  border-radius: 10px;
  padding: 20px;
`

const WrapperHomeLogin = styled.div`
  background-color: #ADCE74;
  margin: 0;
  padding: 10px;
`

const WrapperPengeluaran = styled.div`
  display: flex;

  @media (max-width: 800px) {
    display: block;
  }
`

const WrapperSaldo = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    display: block;
  }
`