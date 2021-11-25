import React from 'react';

const Words = ({word}) => {
    return (
        <div>
            <h1>{word.word}</h1>
            <p>{word.phonetic}</p>
        </div>
    );
};

export default Words;