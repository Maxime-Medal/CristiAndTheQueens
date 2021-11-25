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
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (track) {
      let a = track[0].word
      let link = a.replace(/'/gi,'');
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${link}`)
        .then((res) => res.data)
        .then((lyricsArray) => setLyrics(lyricsArray))
        .then(console.log(lyrics));
    }
  }, [track]);

  return <div></div>;
};

export default ApiDictonary;
