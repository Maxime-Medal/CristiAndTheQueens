import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiDictonary = () => {
  const [track, setTrack] = useState([]);
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => {
    axios
      .get("https://random-words-api.vercel.app/word")
      .then((res) => res.data)
      .then((tracklist) => setTrack(tracklist))
      .then(console.log(track))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (track) {
      let a = track
      console.log(a);
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${track.word}`)
        .then((res) => res.data)
        .then((lyricsArray) => setLyrics(lyricsArray));
    }
  }, [track]);

  return <div></div>;
};

export default ApiDictonary;
