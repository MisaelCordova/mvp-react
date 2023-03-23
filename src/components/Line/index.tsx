export const Line = ({descricao,quantidade, valorUnitario,valorTotal}:{descricao:string, quantidade:number, valorUnitario:number, valorTotal:number }) =>{
  return(
    <tr>
      <th>{descricao}</th>
      <th>{quantidade}</th>
      <th>{valorUnitario}</th>
      <th>{valorTotal}</th>
    </tr>
    )
}