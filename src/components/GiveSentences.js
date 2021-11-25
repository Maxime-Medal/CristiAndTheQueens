import React from 'react';

function GiveSentences({words}) {
    let nouns = words.filter((e) => e.meaning.partOfSpeech==="noun")
    const sentencesType = [
        `The ${noun} wants to ${verb} but does he ?`,
        `Why, oh why the ${noun} ${adj}, they couldn't ${verb}.`,
        `${exclamation}, I ${verb}, I ${verb}, I ${verb}, but failed.`,
        `A little ${noun} of you, the little ${noun} in me.`,
        `You ${verb} ${adverb} in the ${noun}.`,
        `Once upon a time you ${verb} ${adverb}`,
        `He doesn't ${verb} any ${noun}`,
        `Wherever you ${verb}, Whenever you ${verb}`,
        `The chance won't come again and don't ${verb} too soon`
    ]
    function TurnIntoSentences(noun, verb, adj, adverb, exclamation) {

    return ""
    }

    return sentences
}