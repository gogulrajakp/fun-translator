'use strict';

const input = document.getElementById('input');
const btnTranslate = document.getElementById('btn-translate');
const output = document.getElementById('output');
const selected = document.getElementById('languages');

let languages = 'minion';

const translateText = async function() {
  const inputText = input.value;
  console.log(input);
  // const language = 'minion';

  if(inputText === '' || inputText === null){
    alert('Input text is mandatory')
  } else{
    const url = `https://api.funtranslations.com/translate/${languages}.json?text=${inputText}`;

    console.log(url);
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);
    output.innerHTML = result.contents.translated;
  }
}

const checkKey = function(e){
  // console.log(e.key)
  if(e.key === 'Enter'){
    translateText();
  }
}

btnTranslate.addEventListener('click', translateText);
document.addEventListener('keydown', checkKey);
selected.addEventListener('change', e => {
  languages = (e.target.value);
  translateText();
  console.log(languages)
})

console.log(languages);