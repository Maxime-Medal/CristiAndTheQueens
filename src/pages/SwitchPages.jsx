import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigations";
import Resume from "./Resume";


let verbs = [
  "market",
  "kill",
  "want",
  "wipe",
  "integrate",
  "persist",
  "view",
  "fear",
  "dismiss",
  "maintain",
  "breed",
  "creep",
  "tap",
  "disappear",
  "price",
  "pretend",
  "cross",
  "characterize",
  "block",
  "lift",
  "compensate",
  "smash",
  "sponsor",
  "pursue",
  "advance",
  "anticipate",
  "top",
  "dump",
  "announce",
  "bang",
  "govern",
  "match",
  "envisage",
  "carve",
  "lie",
  "plead",
  "drink",
  "swing",
  "transform",
  "spell",
  "calculate",
  "hire",
  "stay",
  "omit",
  "constitute",
  "initiate",
  "suppose",
  "benefit",
  "demonstrate",
  "give",
  "book",
  "study",
  "have",
  "choose",
  "spell",
  "strengthen",
  "enquire",
  "pull",
  "conform",
  "dream",
  "limit",
  "injure",
  "bend",
  "mean",
  "grant",
  "repair",
  "think",
  "throw",
  "assume",
  "pin",
  "rent",
  "search",
  "seize",
  "neglect",
  "manage",
  "remark",
  "talk",
  "miss",
  "determine",
  "cease",
  "decide",
  "act",
  "waste",
  "stroke",
  "break",
  "shift",
  "diminish",
  "stem",
  "work",
  "reduce",
  "speed",
  "support",
  "deserve",
  "interview",
  "borrow",
  "demonstrate",
  "try",
  "born",
  "tear",
];

let adjs = [
  "relieved",
  "empty",
  "aback",
  "futuristic",
  "even",
  "dispensable",
  "actually",
  "famous",
  "scary",
  "guiltless",
  "normal",
  "trashy",
  "half",
  "jolly",
  "discreet",
  "observant",
  "vigorous",
  "fearful",
  "past",
  "dynamic",
  "closed",
  "incandescent",
  "second",
  "heartbreaking",
  "cruel",
  "bloody",
  "obeisant",
  "lively",
  "sore",
  "three",
  "guttural",
  "bashful",
  "absent",
  "teeny",
  "feigned",
  "workable",
  "orange",
  "dull",
  "scandalous",
  "fluttering",
  "aggressive",
  "halting",
  "immediate",
  "unknown",
  "efficacious",
  "open",
  "parsimonious",
  "quickest",
  "excellent",
  "second-hand",
  "misty",
  "recondite",
  "combative",
  "light",
  "resonant",
  "uncovered",
  "glamorous",
  "irritating",
  "enthusiastic",
  "tedious",
  "nutty",
  "southern",
  "erratic",
  "shrill",
  "afraid",
  "worried",
  "economic",
  "ultra",
  "harsh",
  "common",
  "weary",
  "cheerful",
  "loose",
  "concerned",
  "aspiring",
  "organic",
  "workable",
  "naughty",
  "panoramic",
  "pushy",
  "therapeutic",
  "reminiscent",
  "actually",
  "imaginary",
  "incompetent",
  "ahead",
  "enormous",
  "lonely",
  "questionable",
  "four",
  "ruddy",
  "mere",
  "aromatic",
  "private",
  "resolute",
  "dead",
  "wonderful",
  "relevant",
  "protective",
  "defiant",
];

let adverbs = [
  'blindly',
  'energetically',
  'punctually',
  'together',
  'physically',
  'miserably',
  'honestly',
  'very',
  'absentmindedly',
  'softly',
  'fondly',
  'solidly',
  'successfully',
  'upward',
  'beautifully',
  'adventurously',
  'loyally',
  'forth',
  'enormously',
  'hungrily',
  'acidly',
  'yawningly',
  'originally',
  'literally',
  'probably',
  'extremely',
  'foolishly',
  'definitely',
  'shakily',
  'rarely',
  'suddenly',
  'regularly',
  'specifically',
  'warmly',
  'primarily',
  'powerfully',
  'vaguely',
  'unexpectedly',
  'previously',
  'lively',
  'kissingly',
  'happily',
  'coolly',
  'questionably',
  'never',
  'afterwards',
  'jaggedly',
  'rather',
  'normally',
  'coyly',
  'scarcely',
  'actually',
  'joyfully',
  'viciously',
  'knowingly',
  'triumphantly',
  'else',
  'yearly',
];

let nouns = [
  'understanding',
  "son",
  'inflation',
  'activity',
  'community',
  'anxiety',
  'growth',
  'arrival',    
  'map',
  'property',
  'blood',
  'communication',
  'variety',
  'vehicle',
  'significance',
  'preparation',
  'analyst',
  'birthday',
  'sympathy',
  'police',
  'association',
  'signature',
  'psychology',
  'potato',
  'appearance',
  'championship',
  'cigarette',
  'arrival',
  'tennis',
  'construction',
  'memory',
  'child',
  'initiative',
  'depth',
  'president',
  'marketing',
  'category',
  'elevator',
  'funeral',
  'communication',
  'distribution',
  'development',
  'guest',
  'oven',
  'society',
  'sir',
  'advertising',
  'two',
  'marriage',
  'affair',
  'paper',
  'thanks',
  'courage',
  'mixture',
  'suggestion',
  'news',
  'confusion',
  'nature',
  'cancer',
  'movie',
  'currency',
  'apartment',
  'hotel',
  'hearing',
  'police',
  'internet',
  'salad',
  'height',
  'reputation',
  'session',
  'shirt',
  'cookie',
  'operation',
  'assumption',
  'airport',
  'tradition',
  'refrigerator',
  'comparison',
  'guitar',
  'dad',
  'message',
  'teaching',
  'environment',
  'consequence',
  'negotiation',
  'library',
  'week',
  'employee',
  'meat',
  'growth',
  'boyfriend',
  'trainer',
  'paper',
  'way',
  'union',
  'storage',
  'psychology',
  'cheek',
  'role',
  'distribution',
  'meaning',
  'artisan',
  'death',
  'shirt',
  'uncle',
  'opportunity',
  'employer',
  'nation',
  'mode',
  'childhood',
  'version',
  'speaker',
  'week',
  'virus',
  'teacher',
  'success',
  'mood',
  'theory',
  'policy',
  'organization',
  'recommendation',
  'university',
  'loss',
  'income',
  'river',
  'shopping',
  'member',
  'article',
  'estate',
  'warning',
  'truth',
  'breath',
  'hall',
  'opinion',
  'church',
  'love',
  'story',
  'bath',
  'college',
  'payment',
  'leadership',
  'impression',
  'reading',
  'person',
  'selection',
  'orange',
  'inspector',
  'platform',
  'tooth',
  'housing',
  'oven',
  'nature',
  'government',
  'night',
  'touch',
  'population',
  'cigarette',
  'agency',
  'army',
  'literature',
  'situation',
  'alcohol',
  'reception',
  'son',
  'activity',
  'promotion',
];

const newArray = verbs.concat(adverbs, nouns, adjs);
console.log(newArray);
const phrase = [];

function SwitchPage({ rangeWordValue, rangeSentenceValue, sentences, setSentences}) {
  const [word, setWord] = React.useState(null)
  const [state, setState] = React.useState("Click on like to begin"); 

  const deleteWord = () => {
    let index = Math.floor(Math.random() * newArray.length);
    return newArray.splice(index, 1), setState(newArray[index]);
  };  const addWord = () => {
    let index = Math.floor(Math.random() * newArray.length);
    return setState(newArray[index]), phrase.push(newArray[index]), newArray.splice(index, 1);
  };
  console.log(phrase);

  function GiveSentences(array, numbSentence) {
  let nounsList = [];
  let verbsList = [];
  let adjsList = [];
  let adverbsList = [];
  for (let i=0;i<array.length; i++) {
      if (nouns.includes(array[i])) {
          nounsList.push(array[i])
      } else if (verbs.includes(array[i])) {
          verbsList.push(array[i])
      } else if (adverbs.includes(array[i])) {
          adverbsList.push(array[i])
      } else if (adjs.includes(array[i])) {
          adjsList.push(array[i])
      } 
  }
  
  let sentencesList = [];
  function TurnIntoSentences(noun, verb, adj, adverb) {
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
      let randomSentenceIndex = Math.floor(Math.random()* numbSentence)
      let sentence = sentencesType[randomSentenceIndex]
      sentencesList.push(sentence)

  return sentence;

  }
  for (let j=0; j<numbSentence; j++) {
      let indexVerb=Math.floor(Math.random() * verbsList.length)
      let indexAdj=Math.floor(Math.random() * adjsList.length)
      let indexAdverb=Math.floor(Math.random() * adverbsList.length)
      let indexNoun=Math.floor(Math.random() * nounsList.length)
      
  TurnIntoSentences(nounsList[indexNoun], verbsList[indexVerb], adjsList[indexAdj], adverbsList[indexAdverb])
}
  
  return sentencesList
}

  if (rangeWordValue === phrase.length) {
    let a = GiveSentences(phrase, rangeSentenceValue)
    console.log(a)
    return <Resume array={a} />;
  }
  return (
    <SelectWord>
      <Navigation />

      <DivWord>
        <OneWord>{state}</OneWord>
      </DivWord>
      <LikeButton className="button-container">
        <button type="button" onClick={deleteWord}>
          ✗
        </button>
        <button type="button" onClick={addWord}>
          ✔️
        </button>
      </LikeButton>
    </SelectWord>
  );
}
const SelectWord = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

const DivWord = styled.div`
  background-color: plum;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 80%;
  border-radius: 25px;
`;

const OneWord = styled.p`
  font-size: 3em;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: var(--text-font);
`;

const LikeButton = styled.div`
  background-color: royalblue;
  width: 100%;
  
  button {
    width: 50%;
    height: 100%;
    font-size: 3em;
    background-color:rgba();
  }
`;

export default SwitchPage;
