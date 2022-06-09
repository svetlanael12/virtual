import './App.css';
import Title from './components/mainBlock/Title';
import Header from './components/navigation/Header';
import ServiceBlock from './components/mainBlock/ServiceBlock';
import { useState, useEffect } from 'react';


function App() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  


  return (
    <div className="App" >
      <header>
        <Header nav={scroll} />
      </header>
      <main>
        <Title />
        <ServiceBlock />
      </main>

      <button
            className={scroll > 150 ? "button-up" : "none"}
            onClick={handleUpButton}
        >
            ↑
        </button>
    </div>
    
  );
}

export default App;
