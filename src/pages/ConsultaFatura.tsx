import Card from "../components/Card"
import { Item } from "../components/Item"

export const ConsultaFatura = () =>{
  let Faturas = [{
      codDocumento:'02.126.406/0001-40',
      codUc:'00001',
      competencia: '01/01/2021',
    },{
      codDocumento:'22.867.930/0001-80',
      codUc:'00011',
      competencia: '01/01/2021',
  }
    ]
  return(
      <Card>
      <ul>
        {Faturas.map((item, index)=>(
          <Item
          key={index}
           {...item}
          />  
        ))}
     </ul>
    </Card>
    
    
  )
}