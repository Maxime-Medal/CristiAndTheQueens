import React from 'react';

function GiveSentences({words, numbSentence}) {
    let nouns = words.include((e) => e.meaning.partOfSpeech==="noun")
    let verbs = words.filter((e) => e.meaning.partOfSpeech==="verb")
    let adjs = words.filter((e) => e.meaning.partOfSpeech==="adj")
    let adverbs= words.filter((e) => e.meaning.partOfSpeech==="adverb")

    const sentencesType = [
        `The ${noun} wants to ${verb} but does he ?`,
        `Why, oh why the ${noun} ${adj}, they couldn't ${verb}.`,
        `I ${verb}, I ${verb}, I ${verb}, but failed.`,
        `A little ${noun} of you, the little ${noun} in me.`,
        `You ${verb} ${adverb} in the ${noun}.`,
        `Once upon a time you ${verb} ${adverb}`,
        `He doesn't ${verb} any ${noun}`,
        `Wherever you ${verb}, Whenever you ${verb}`,
        `The chance won't come again and won't ${verb} too soon`,
        `One girl, millions ${adj}`
    ]

    function TurnIntoSentences(noun, verb, adj, adverb) {

        let indexVerb=Math.floor(Math.random() * verb.length)
        let indexAdj=Math.floor(Math.random() * adjs.length)
        let indexAdverb=Math.floor(Math.random() * adverbs.length)
        let indexNoun=Math.floor(Math.random() * nouns.length)
        let randomSentence = Math.floor(Math.random()*(numbSentence))


    return 
    }

    return sentences
}