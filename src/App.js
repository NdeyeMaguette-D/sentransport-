import './App.css';
import Header from './Header';
import Footer from './Footer';
import Statistique from './Statistique';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <p>Bienvenue ! Cette application vous aide a trouver
        votre ligne de bus a Dakar.</p>
        <div className="stats-container">
          <Statistique chiffre="10" libelle="Lignes" />
          <Statistique chiffre="150" libelle="Arrets" />
          <Statistique chiffre="45" libelle="Bus actifs" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;