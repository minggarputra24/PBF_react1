import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Identitas Diri :</h3>
        <p>
          <b>Nama :</b> Minggar Putra Dhea Ramadhan
          <br></br>
          <b>NIM :</b> 1841720111
        </p>
        <a
          className="App-link"
          href="http://bit.ly/PBFreact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pengumpulan Tugas
        </a>
      </header>
    </div>
  );
}

export default App;
