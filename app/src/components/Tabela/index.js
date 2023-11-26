import React, { useState, useEffect } from 'react';
import './tabela.module.css';
import dados from '../dados';
import Adicionar from '../adicionar/Adicionar';

function Tabela() {
  const [clientes, setClientes] = useState(dados);
  const [newData, setNewData] = useState(null);
  
  const handleNewData = () => {
      setClientes([...clientes, newData]);
  };

  useEffect(() => {
    if(newData !== null){
      handleNewData()
    }
  }, [newData])
  

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
          <td>{item && item.cliente && item.cliente.nome}</td>
          <td>R${item && item.cliente && Number(item.cliente.Investimento).toFixed(2)}</td>
          <td>{item && item.cliente && item.cliente.Tempo}</td>
          <td>R${item && item.cliente && Number(item.cliente.Investimento * item.cliente.Tempo).toFixed(2)}</td>
        </tr>
        ))}
        </tbody>
      </table>

      <Adicionar setNewData={setNewData} />
    </div>
  );
}

export default Tabela;
