'use strict';

const input = document.getElementById('input');
const btnTranslate = document.getElementById('btn-translate');
const output = document.getElementById('output');

const translateText = async function() {
  const inputText = input.value;
  const language = 'minion';
  if(inputText === '' || inputText === null){
    alert('Input text is mandatory')
  } else{
    const url = `https://api.funtranslations.com/translate/${language}.json?text=${inputText}`;

    const data = await fetch(url);
    const result = await data.json();
    output.innerHTML = result.contents.translated;
  }
}

const checkKey = function(e){
  console.log(e.key)
  if(e.key === 'Enter'){
    translateText();
  }
}

btnTranslate.addEventListener('click', translateText);
document.addEventListener('keydown', checkKey);