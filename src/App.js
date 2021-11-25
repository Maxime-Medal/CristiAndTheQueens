import './App.css';
import Adjectives from './components/Adjectives';
import Verbs from './components/Verbs';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
    <Home />
    <Verbs />
    <Adjectives />
    </div>
  );
};

export default App;