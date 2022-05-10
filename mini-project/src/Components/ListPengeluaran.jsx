import React from 'react'
import styled from '@emotion/styled'

export default function ListPengeluaran({expensesByHome, ...props}) {
  console.log(expensesByHome)
  return (
    <div className='overflow-y-auto h-80 '>
      <WrapperExpenseItem >
        <WrapTitle>
          <h1>RINCIAN PENGELUARAN</h1>
        </WrapTitle>
        <h2 style={{color: 'red', textAlign:'center'}}>Pengeluaran : -{props.totalPengeluaran}</h2>
        {expensesByHome?.map((item) => 
              <ItemPengeluaran>
                  <h3> {item.date}</h3>
                  <h3>{item.notes}</h3>
                  <h3 style={{color: 'red'}}>-{item.jumlah}</h3>
              </ItemPengeluaran>
        )}
      </WrapperExpenseItem>
    </div>
  )
}

const WrapperExpenseItem = styled.div`
  padding: 20px 25px;
  margin: 0 20px;
  align-items: center;
  border: 1px solid black;
  border-radius: 25px;
  background-color: #fff;
  ;

  @media (max-width: 800px) {
    padding: 10px;
    margin: 0 10px;
  }
`

const WrapTitle = styled.div`
 text-align: center;
 font-size: 2rem;
  font-weight: bold;
`

const ItemPengeluaran = styled.div`
  display: flex;
  border: 1px solid black;
  justify-content: space-between;
  margin: 20px 0;
  border-radius: 20px;
  padding: 10px 15px;
  align-items: center;
  box-shadow: 3px 3px #282c40;
  column-gap: 150px;

  @media (max-width: 800px) {
    column-gap: 35px;
  }

  @media (max-width: 428px) {
    column-gap: 35px;
  }
`