import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


const DefButton = ({props}) => {
  const word = useParams('rock');
  const [definition, setDefinition] = useState('');

    useEffect(() => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        setDefinition(res.data.definitions);

      })
    }, []);

    console.log(definition);

  return (
    <div className="word">
      <h1>{word} : </h1>
      <p>{definition}</p>
    </div>
  );
}

export default DefButton;