import { useState } from 'react'
import { Iitens } from '../../types/item'
import { Line } from '../Line'
import './Table.css'
export const Table =() =>{


//   const [itens,setItens] = useState([{
//       descricao: 'Iluminação pública',
//       quantidade: 15,
//       valorUnitario: 0.5552
//   },{
//     descricao: 'consumo',
//     quantidade: 120,
//     valorUnitario: 0.5552
// }])
  return(
    <table>
      <thead>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
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