/*** utility functions ***/
function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

const loadingEmoji = document.querySelector('.spinner');
const letters = document.querySelectorAll('.letter-input');
const ANSWER_LENGTH = 5;
const ROUNDS = 6;

function setLoading(isLoading) {
  loadingEmoji.classList.toggle('hidden', !isLoading);
}

function makeHashMap(array) {
  const obj = {};
  array.forEach((letter, index) => {
    if (obj[letter]) {
      // count the letters in word
      obj[letter]++;
    } else {
      // add new letter key value pair
      obj[letter] = 1;
    }
  });
  return obj;
}

async function getWordOfDay() {
  // random=1 parameter fetches more than 1 random 5 letter
  // word per day.
  const res = await fetch('https://words.dev-apis.com/word-of-the-day?random=1');
  const resObj = await res.json();
  setLoading(false);
  return resObj.word.toUpperCase();
}


/*** main game part, user input ***/
async function startGame() {
  let currentGuessWord = '';
  let currentRow = 0;
  let finishedGame = false;
  let isLoading = true;

  const word = await getWordOfDay();
  isLoading = false;
  const wordLetters = word.split('');

  function addLetter(letter) {
    if (currentGuessWord.length < ANSWER_LENGTH) {
      currentGuessWord += letter;
    } else {
      // only change the last letter (5th one)
      currentGuessWord = currentGuessWord.substring(0, currentGuessWord.length - 1) + letter;
    }
    letters[ANSWER_LENGTH * currentRow
      + currentGuessWord.length - 1].innerText = letter;
  }

  async function getRowWord() {
    if (currentGuessWord.length !== ANSWER_LENGTH) {
      // do nothing - word isn't long enough
      return;
    }   
    // validate that it is an english word
    isLoading = true;
    setLoading(true);
    const res = await fetch('https://words.dev-apis.com/validate-word', {
      method: 'POST',
      body: JSON.stringify({ word: currentGuessWord })
    });
    const resObj = await res.json();
    const validWord = resObj.validWord;
    isLoading = false;
    setLoading(false);
    if (!validWord) {
      markInvalidWord();
      return;
    }

    const guessLetters = currentGuessWord.split('');
    const map = makeHashMap(wordLetters);
    //console.log(map);
    // marking correct letters
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      if (guessLetters[i] === wordLetters[i]) {
        letters[ANSWER_LENGTH * currentRow + i].classList.add('correct');
        // marked as correct, remove letter from hash map
        map[guessLetters[i]]--;
      }
    }
    // marking close or wrong letters - out of position
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      if (guessLetters[i] === wordLetters[i]) {
        // already marked green letters above
      } else if (wordLetters.includes(guessLetters[i]) && map[guessLetters[i]] > 0) {
        letters[ANSWER_LENGTH * currentRow + i].classList.add('close');
        map[guessLetters[i]]--;
      } else {
        // wrong letter
        letters[ANSWER_LENGTH * currentRow + i].classList.add('wrong');
      }
    }
    // reset the word for the next row
    currentRow++;
    
    // place to put winning or loosing message.
    const winMsg = document.querySelector('.game-message');
    // win or loosing messages
    if (currentGuessWord === word) {
      winMsg.innerHTML = '<h3>🎊 You win! 😊</h3>';
      finishedGame = true;
      return;
    }

    if (currentRow === ROUNDS) {
      winMsg.innerHTML = 'You loose after 6 rounds. the word was: ' + word;
      finishedGame = true;
    }
    // reset the word
    currentGuessWord = '';
  }

  function markInvalidWord() {
    alert('That is not a dictionary word');
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      letters[ANSWER_LENGTH * currentRow + i].classList.add('invalid');
      setTimeout(function() {
        letters[ANSWER_LENGTH * currentRow + i].classList.remove('invalid');
      }, 100);
    }
    
  }

  function backspace() {
    currentGuessWord = currentGuessWord.substring(0, currentGuessWord.length - 1);
    letters[ANSWER_LENGTH * currentRow 
      + currentGuessWord.length].innerText = '';
  }

  

  /// main event listener
  document.addEventListener('keydown', function (e) {
    e.preventDefault();
    if (finishedGame || isLoading) {
      return;
    }
    const action = e.key;
    // enter key
    if (action === 'Enter') {
      getRowWord();
    }

    // backspace
    if (action === 'Backspace') {
      // clear out the letter
      // call backspace();
      backspace();
    }

    if (isLetter(action)) {
      addLetter(action.toUpperCase());
    }
  });
}





startGame();
