import './App.css';
import Title from './components/mainBlock/Title';
import Header from './components/navigation/Header';


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Title />
      </main>
    </div>
  );
}

export default App;
