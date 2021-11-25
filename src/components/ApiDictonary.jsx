import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiDictonary = () => {
  const [track, setTrack] = useState(null);
  const [lyrics, setLyrics] = useState(null);

  useEffect(() => {
    axios
      .get("https://random-word-api.herokuapp.com/word")
      .then((res) => res.data)
      .then((tracklist) => setTrack(tracklist))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (track) {
      console.log(track)
      let a = track[0]
      console.log(a)
      let link = a.replace(/'/gi,'');
      console.log(link)
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${link}`)
        .then((res) => res.data)
        .then((lyricsArray) => setLyrics(lyricsArray))
        .then(console.log(lyrics))
    }
  }, [track]);

  return <div></div>;
};

export default ApiDictonary;
