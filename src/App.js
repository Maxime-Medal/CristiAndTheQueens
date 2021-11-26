import './App.css';
import WordsLibrary from './components/WordsLibrary';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
    <Home />
    <WordsLibrary />
    </div>
  );
};

export default App;