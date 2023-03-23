import React, { useState } from "react";
import { Iitens } from "../../types/item";
import { Button } from "../Button"
import { Table } from "../Table"
interface Props{
  setItens: React.Dispatch<React.SetStateAction<Iitens[]>>
}
export const Form1 = ({setItens}:Props) =>{

  const [descricao, setDescricao] = useState("")
  const [quantidade, setQuantidade] = useState(0)
  const [valorUnitario, setValorUnitario] = useState(0)
  let [valorTotal, serValorTotal] = useState(0)

  const adicionarItem = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    serValorTotal(quantidade*valorTotal)
    console.log(valorTotal)
    setItens(itensAntigos=>
      [
        ...itensAntigos,
        {
          descricao,
          quantidade,
          valorUnitario,
          valorTotal
        }
      ])
} 
  return(
    <>
    <h2>Itens da <span>Faturas</span></h2>
    <form onSubmit={adicionarItem}>
    <div className='line-input'>
      <label>Descrição:</label>
      <div className='lineDescription'>
      <input 
      id='description'
      value={descricao}
      onChange={e=>setDescricao(e.target.value)}
      className="cpfcnpj"
      list="listaConsumidores" 
      type="text"
      placeholder="Digite o nome o item"
       autoComplete="off" />
      <button  id='btnAdd'>+</button>
      </div>
    </div>
    <div className='line-input'>
      <label>Quantidade:</label>
      <input 
      type="number" 
      id="codUC"
  
      onChange={e=>setQuantidade(Number(e.target.value))}
       placeholder="Digite a quantidade" 
       autoComplete="off" />
    </div>
    <div className='line-input'>
      <label>Valor unitário:</label>
      <input type="text"
   
       onChange={e=>setValorUnitario(Number(e.target.value))}
       id="competencia"
        placeholder="Digite o valor unitario"
         />
    </div>
    <div className='line-input'>
    <Button type="submit" >Adicionar Item </Button>
    
    </div>
   
  </form>
  </>
  )
}