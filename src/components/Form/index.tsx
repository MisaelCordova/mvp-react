import { useState } from "react"
import { Iitens } from "../../types/item"
import { Button } from "../Button"
import { Form1 } from "../Form1/index"
interface Props{

  setItens: React.Dispatch<React.SetStateAction<Iitens[]>>
}

export const Form = ({itens}: {itens: Iitens[]}) =>{

  const [descricao, setDescricao] = useState("")
  const [quantidade, setState] = useState(0)
  const [valorUnitario, setValorUnitario] = useState(0)
  const adicionarItem = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
} 
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
  <Form1/>
  <Table itens={itens}/>
  <div  className='line-input'>
      <Button>Salvar</Button>
    </div>
  </>
  )
}