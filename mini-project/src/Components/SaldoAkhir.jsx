import React from 'react'
import styled from '@emotion/styled';

export default function SaldoAkhir(props) {
  console.log(props.totalIncomes);

  const saldoAkhir = props.totalIncomes - props.totalPengeluaran;
  return (
    <WrapperSaldoAkhir>
      <WrapSaldo>
        <h2>Saldo</h2>
        {props.totalIncomes}        
      </WrapSaldo>
      <WrapSaldo style={{color:'red'}}>
      <h2>Pengeluaran </h2>
        -{props.totalPengeluaran}
      </WrapSaldo>
      <hr style={{border: '1px solid black'}}/>
      <WrapSaldo>
      <h2>Saldo Akhir </h2>
        {saldoAkhir}
      </WrapSaldo>
    </WrapperSaldoAkhir>
  )
}

const WrapperSaldoAkhir = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  margin-right: 20px;
  font-size: 1.4rem;
  font-weight: bold;
`

const WrapSaldo = styled.div`
  display: flex;
  column-gap: 50px; 
  justify-content: space-between;
`
