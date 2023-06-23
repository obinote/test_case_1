import { useEffect, useState } from 'react'
import './App.css'

function VowelConsonant() {
  const [vowels, setVowels] = useState('');
  const [consonants, setConsonants] = useState('');
  const [inputString, setInputString] = useState('Sample Case');

  const getVowel = (string) => {
    let vowels = [];
    let dummy = string.toLowerCase();

    for (let s = 0; s < dummy.length; s++) {
      let char = dummy.charAt(s);
      if (char.match(/[a-z]/i)) {
        if (char.match(/[aiueo]/i)) {
          vowels.push(char)
        }
      }
    }

    return vowels.join('');
  }

  const getConsonant = (string) => {
    let consonants = [];
    let dummy = string.toLowerCase();

    for (let s = 0; s < dummy.length; s++) {
      let char = dummy.charAt(s);
      if (char.match(/[a-z]/i)) {
        if (!char.match(/[aiueo]/i)) {
          consonants.push(char)
        }
      }
    }

    return consonants.join('');
  }

  const separateString = (string) => {
    const vowel = getVowel(string);
    const consonant = getConsonant(string);

    setVowels(vowel);
    setConsonants(consonant);
    console.log("Input String: ", inputString);
    console.log("Vowels: ", vowel);
    console.log("Consonants: ", consonant);
  }

  useEffect(() => {
    separateString(inputString)
  }, [inputString])

  const handleChange = (e) => {
    setInputString(e.target.value)
  }

  return (
    <>
      <h1>Vowel and Consonant</h1>
      <input type='text' onChange={handleChange} value={inputString}/>
      <div>
        <p>Vowel : <label>{vowels}</label></p>
      </div>
      <div>
        <p>Consonant : <label>{consonants}</label></p>
      </div>
    </>
  )
}

export default VowelConsonant
