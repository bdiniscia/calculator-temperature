import './App.css';
import Calculator from './Components/Calculator';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
