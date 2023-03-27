import { Iitens } from "../../types/item"

interface Props extends Iitens{
  selecionaItens: (tarefaSelecionada:Iitens) => void
}

export const Line = (
  {
    descricao,
    quantidade, 
    valorUnitario, 
    valorTotal, 
    selecionado,
    id,
    selecionaItens 
  }: Props) =>{
  console.log('item atual:',{descricao,quantidade, valorUnitario, valorTotal, selecionado, id })
  return(
    <tr
     className={`${selecionado ? 'linhaSelecionada': ''}`}
     onClick={()=> selecionaItens({
      descricao, 
      quantidade,
      valorTotal,
      valorUnitario, 
      selecionado, 
      id })}>
      <th>{descricao}</th>
      <th>{quantidade}</th>
      <th>{valorUnitario}</th>
      <th>{valorTotal}</th>
      <th></th>
    </tr>
    )
}