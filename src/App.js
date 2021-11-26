import './App.css';
import Home from './pages/Home';
import GiveSentences from './components/GiveSentences.jsx';

const App = () => {
  let array = ['army',
  'literature', "kill",
  "want",
  "wipe",
  "integrate",
  "persist",
  "view",
  "fear", "scary",
  "guiltless",
  "normal",
  "trashy",
  "half",
  "jolly", 'solidly',
  'successfully',
  'upward', 'airport',
  'tradition',
  'refrigerator',
  'comparison',
  'guitar',
  'dad',
  'message',
  'teaching',
  'beautifully'];
  let nb = 5;
  return (
    <div className="App">
      <Home />
      <GiveSentences words={array} numbSentence={nb} />
    </div>
  );
};

export default App;