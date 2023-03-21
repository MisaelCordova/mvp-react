import { Button } from "../Button"

export const Form1 = () =>{
  return(
    <>
    <h2>Itens da <span>Faturas</span></h2>
    <form>
    <div className='line-input'>
      <label>Descrição:</label>
      <div className='lineDescription'>
      <input id='description' className="cpfcnpj" list="listaConsumidores" type="text" placeholder="Digite o nome o item" autoComplete="off" />
      <button id='btnAdd'>+</button>
      </div>
    </div>
    <div className='line-input'>
      <label>Quantidade:</label>
      <input type="number" id="codUC" placeholder="Digite a quantidade" autoComplete="off" />
    </div>
    <div className='line-input'>
      <label>Valor unitário:</label>
      <input type="number" id="competencia" placeholder="Digite o valor unitario" />
    </div>
    <div className='line-input'>
    <Button >Adicionar Item </Button>
    </div>
   
  </form>
  </>
  )
}