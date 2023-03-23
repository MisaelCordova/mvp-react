import { useState } from 'react'
import { Iitens } from '../../types/item'
import { Line } from '../Line'
import './Table.css'
interface Props{

  setItens: React.Dispatch<React.SetStateAction<Iitens[]>>
}
export const Table =({itens}: {itens: Iitens[]}) =>{

  return(
    <table>
      <thead>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Valor Total</th>
      </thead>
      <tbody>
        {itens.map((item,index)=>
        <Line
          key={index}
        {...item} 
        />
        )}
       
      </tbody>
    </table>
  )
}