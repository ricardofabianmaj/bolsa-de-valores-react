import Tabela from './components/Tabela/index.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bolsa de Valores do Brasil (B3)</h1>
      <Tabela.Tabela />
    </div>
  );
}

export default App;
