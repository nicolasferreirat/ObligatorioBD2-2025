import logo from './logo.svg';
import './App.css';
import Card from "./Components/Card";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          ELECCIONES 2025
        </p><br></br>
        <p>
          A QUIEN VAS A VOTAR?
        </p><br></br>
       
        <div><Card mode={"dark"} photocandidate = {"https://www.gub.uy/agencia-uruguaya-cooperacion-internacional/sites/agencia-uruguaya-cooperacion-internacional/files/imagenes/noticias/LP_mensaje%20AG%2075%20aniversario%20NNUUportada.png"} namecandidate = {"Luis Lacalle Pou"} gameId = {1}></Card></div>
        
      </header>
    </div>
  );
}

export default App;
