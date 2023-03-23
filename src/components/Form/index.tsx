import React, { useState } from "react"
import { Iitens } from "../../types/item"
import { Button } from "../Button"
import { Form1 } from "../Form1/index"
import { Table } from "../Table"


export const Form = () =>{
    const [itens, setItens] = React.useState<Iitens[] |[]>([]);

  return(
    <>
    <form>
    <div className='line-input'>
      <label>CPF/CNPJ:</label>
      <input className="cpfcnpj" id="cpfcnpj" list="listaConsumidores" type="text" placeholder="Digite o numero do documento" autoComplete="off" />
    </div>
    <div className='line-input'>
      <label >Código da UC</label>
      <input type="number" id="codUC" placeholder="Digite o código UC" autoComplete="off" />
    </div>
    <div className='line-input'>
      <label>Competência</label>
      <input type="date" id="competencia" placeholder="Digite a Competência" />
    </div>
  </form>
  <Form1 setItens={setItens}/>
  <Table itens={itens}/>
  <div  className='line-input'>
      <Button>Salvar</Button>
    </div>
  </>
  )
}