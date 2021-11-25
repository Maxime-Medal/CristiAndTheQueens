import logo from './logo.svg';
import './App.css';

function App() {
    const [ track, setTrack ] = useState(null);
    const [ lyrics, setLyrics ] = useState(null);
    
    useEffect(() => {
      axios
        .get('https://random-words-api.vercel.app/word')
        .then((res) => res.data)
        .then((data) => data.message.body.track_list)
        .then((tracklist) => setTrack(tracklist))
        .catch((err) => console.log(err))
    }, []);
    
    useEffect(() => {
      if (track) {
        let a = track.word
        let link = a.replace(/['"]+/g, '')
        axios
          .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${link}`)
          .then((res) => res.data)
          .then((data) => data.message.body.lyrics)
          .then((lyricsArray) => setLyrics(lyricsArray))}
    }
    , [track])

  return (
    
  );
}

export default App;
