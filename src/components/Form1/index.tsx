import React, { useState } from "react";
import { Iitens } from "../../types/item";
import { Button } from "../Button";
import { v4 as uuidv4 } from "uuid";
interface Props {
  setItens: React.Dispatch<React.SetStateAction<Iitens[]>>;
}
export const Form1 = ({ setItens }: Props) => {
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [valorUnitario, setValorUnitario] = useState(0);
  let valorTotal: number;

  const adicionarItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    valorTotal = quantidade * valorUnitario;
    setItens((itensAntigos) => [
      ...itensAntigos,
      {
        descricao,
        quantidade,
        valorUnitario,
        valorTotal,
        selecionado: false,
        id: uuidv4(),
      },
    ]);
    setDescricao("");
    setQuantidade(0);
    setValorUnitario(0);
  };
  return (
    <>
      <h2>
        Itens da <span>Faturas</span>
      </h2>
      <form onSubmit={adicionarItem}>
        <div className="line-input">
          <label>Descrição:</label>
          <div className="lineDescription">
            <input
              id="description"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="cpfcnpj"
              list="listaConsumidores"
              type="text"
              placeholder="Digite o nome o item"
              autoComplete="off"
            />
            <button type="button" id="btnAdd">
              +
            </button>
          </div>
        </div>
        <div className="line-input">
          <label>Quantidade:</label>
          <input
            type="number"
            id="codUC"
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
            placeholder="Digite a quantidade"
            autoComplete="off"
          />
        </div>
        <div className="line-input">
          <label>Valor unitário:</label>
          <input
            type="text"
            value={valorUnitario}
            onChange={(e) => setValorUnitario(Number(e.target.value))}
            id="competencia"
            placeholder="Digite o valor unitario"
          />
        </div>
        <div className="line-input">
          <Button type="submit">Adicionar Item </Button>
        </div>
      </form>
    </>
  );
};
