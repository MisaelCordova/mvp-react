import { useState } from "react";
import { Iitens } from "../../types/item";
import { Line } from "../Line";
import "./Table.css";
interface Props {
  itens: Iitens[];
  selecionaItens: (itemSelecionado: Iitens) => void;
}
export const Table = ({ itens, selecionaItens }: Props) => {
  return (
    <table>
      <thead>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Valor Total</th>
        <th>Ações</th>
      </thead>
      <tbody>
        {itens.map((item, index) => (
          <Line selecionaItens={selecionaItens} 
          key={index} 
              {...item} />
        ))}
      </tbody>
    </table>
  );
};
