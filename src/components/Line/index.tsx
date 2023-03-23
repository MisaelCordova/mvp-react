export const Line = ({descricao,quantidade, valorUnitario}:{descricao:string, quantidade:number, valorUnitario:number }) =>{
  return(
    <tr>
      <th>{descricao}</th>
      <th>{quantidade}</th>
      <th>{valorUnitario}</th>
    </tr>
    )
}