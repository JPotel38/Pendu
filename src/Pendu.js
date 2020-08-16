import React, { useState, useEffect } from 'react';
import './Pendu.css';
import { Typography } from 'antd';

const { Title } = Typography;

function Pendu() {

  const [points, setPoints] = useState(10);
  const [word, setWord] = useState('');
  const [hidden, setHidden] = useState();;
  const [valid, setValid] = useState(false);
  const [letter, setLetter] = useState('');



  var wordToFind = [];
  var splitWord;

  useEffect(() => {
    if (points == 0) {
      alert("Perdu !")
    }
  }, [points]);

  useEffect(() => {
    console.log(typeof word);
    console.log(word)
    console.log(hidden)
    
    if(hidden != undefined && JSON.stringify(word) == JSON.stringify(hidden)){
      alert("Gagné !")
    }
  }, [letter]);

  function validWord() {
    if (word.length == 0) {
      alert("Choisissez un mot !");
    } else {
      splitWord = word.split("");
      setWord(splitWord)
      for (var i = 0; i < splitWord.length; i++) {
        wordToFind.push('_ ');
        setHidden(wordToFind)
      }
      setValid(true)
    }
  }

  function validLetter() {
      var index = word.indexOf(letter)
      if (index !== -1) {
        hidden.splice(index, 1, letter);
        console.log(hidden)
      } else {
        setPoints(points - 1)
      }
      setLetter('')
  }

  if (valid == true) {
    return (

      <div>
        <div>
          <p>Au deuxième joueur de deviner !</p>
        </div>
        <div>
          <p>Mot à trouver : {hidden.toString()}</p>
        </div>
        <div>
          <input type="text" maxLength="1" onChange={(e) => setLetter(e.target.value.toUpperCase())}
            value={letter} />
          <button type="submit" onClick={() => validLetter()}>Ok</button>
        </div>
        <div>
          <p>Points : {points}</p>
        </div>
      </div>
    )

  } else {

    return (
      <div>
        <div>
          <p>Le premier joueur doit choisir le mot</p>
        </div>
        <div>
          <input type="text" onChange={(e) => setWord(e.target.value.toUpperCase())}
            value={word} />
          <button type="submit" onClick={() => validWord()}>Ok</button>
        </div>
      </div>
    );
  }
}
export default Pendu;