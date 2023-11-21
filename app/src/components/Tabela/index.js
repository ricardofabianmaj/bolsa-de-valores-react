import React, { useState } from 'react';
import './tabela.module.css';
import dados from '../dados';
import Adicionar from '../adicionar/Adicionar';

function Tabela() {
  const [clientes, setClientes] = useState(dados);

  function Add(Novo) {
    const novoCliente = Novo;
    setClientes([...clientes, novoCliente]);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome do Investidor</th>
            <th>Investimento</th>
            <th>Tempo (em mês)</th>
            <th>Total Investido</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((item, index) => (
            <tr key={index}>
              <td>{item.cliente.nome}</td>
              <td>R${Number(item.cliente.Investimento).toFixed(2)}</td>
              <td>{item.cliente.Tempo}</td>
              <td>R${Number(item.cliente.Investimento * item.cliente.Tempo).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Adicionar Add={Add} />
    </div>
  );
}

export default { Tabela, Add};
