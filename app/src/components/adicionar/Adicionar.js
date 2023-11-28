import React, { useState } from "react";
import './adicionar.module.css'

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

    const handleSendAndClearFields = () => {
        setNewData(novo)
        setNome('')
        setInvestimento('')
        setTempo('')
    }

    return (
        <div>
            <label htmlFor="nome">Nome:</label>
            <input
                id="nome"
                name="nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
            />

            <label htmlFor="investimento">Investimento</label>
            <input
                id="investimento"
                name="investimento"
                value={investimento}
                onChange={(event) => setInvestimento(event.target.value)}
            />

            <label htmlFor="tempo">Tempo:</label>
            <input
                id="tempo"
                name="tempo"
                value={tempo}
                onChange={(event) => setTempo(event.target.value)}
            />

            <button onClick={() => handleSendAndClearFields()}>Adicionar</button>
        </div>
    );
}

export default Adicionar;