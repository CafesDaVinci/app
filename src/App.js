import logo from './logo512.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5>Nosso site está em construção</h5>
        <a href="/catalogo.pdf" target="_blank" rel="noopener noreferrer" className='linkpdf'>Confira nosso Catálogo de Cafés 2023</a>
      </header>
    </div>
  );
}

export default App;
