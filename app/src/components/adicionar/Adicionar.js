import React, { useState } from "react";

function Adicionar({ setNewData }) {
    const [nome, setNome] = useState('');
    const [investimento, setInvestimento] = useState('');
    const [tempo, setTempo] = useState('');

    const novo = {
        cliente: {
            nome: nome,
            Investimento: investimento,
            Tempo: tempo
        }
    };

    return (
        <div>
            <label htmlFor="nome">Nome:</label>
            <input
                id="nome"
                name="nome"
                onChange={(event) => setNome(event.target.value)}
            />

            <label htmlFor="investimento">Investimento</label>
            <input
                id="investimento"
                name="investimento"
                onChange={(event) => setInvestimento(event.target.value)}
            />

            <label htmlFor="tempo">Tempo:</label>
            <input
                id="tempo"
                name="tempo"
                onChange={(event) => setTempo(event.target.value)}
            />

            <button onClick={() => setNewData(novo)}>Adicionar</button>
        </div>
    );
}

export default Adicionar;