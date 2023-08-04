import logo from './logo512.png';
import './App.css';
import Pdf from './pdf/catalogo.pdf';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5>Nosso site está em construção</h5>
        <a href={Pdf} target="_blank" rel="noreferrer" className='linkpdf'>Confira nosso Catálogo de Cafés 2023</a>
      </header>
    </div>
  );
}

export default App;
