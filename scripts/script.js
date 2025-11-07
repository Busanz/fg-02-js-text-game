'use strict';

const gameStartInsruction = () => {
  alert(`🌲🧞‍♂️🧞‍♂️🌲 THE CURSED TREASURE BOX 🌲🧞‍♂️🧞‍♂️🌲

You're walking through the ancient forest with your loyal dog 🐕,
searching for wild mushrooms among the twisted trees.

Suddenly...A massive eagle 🦅 swoops down through the canopy, its wings blocking out the sun!

Something falls from its talons and crashes into the bushes near you! 💥

Your dog barks excitedly and rushes toward the sound.
Moments later, he trots back, dragging something heavy in his jaws...

It's a magnificent box! ✨ ✨ 📦 ✨ ✨✨
Covered in strange symbols that glow with an eerie light. Your hands tremble as you reach for the ancient lock...

Click OK 🆗 TO open the lid`);

  alert(`
lid opening....
🫳🏽 CLICK... CLICK... CLICKKKKKKK.. CKIC  🔓

The lid creaks open and a thick, green mist pours out! 🌫️💀

A deep, monstrous voice echoes from within:

😈 "FINALLY... AFTER 2000 YEARS... I AM FREE!"

The voice growls:
😈 "HA HaA Haaa... you have released me. If you wish to claim the treasure within, you must prove your destany!

I possess FIVE MAGICAL COLOR ORBS 🔴🔵🟢🟡🟣

Break my color code in 10 attempt ... and the treasure is yours.
Fail... and your soul is....💀

DO YOU DARE ACCEPT THE CHALLENGE?"

͢ Click OK 🆗 to begin...`);

  alert(
    `The box reveals THREE enchanted slots 🕳️ 🕳️ 🕳️

Only the CORRECT colors in the CORRECT order will break the curse! 🔓✨

Choose wisely... your fate depends on it! 💀`
  );
};

let playerGuessPattern = '';
let emptyInputCount = 0;
let currentAttemp = 0;
let gameStatus = false;

const secretPattern = [];
const colorToChoose = ['RED', 'PURPLE', 'GREEN', 'YELLOW', 'BLUE'];

const ATTEMPT_OF_GUESS = 5; //10

const getPromptInput = () => {
  playerGuessPattern = prompt(`ATTEMPT: ${currentAttemp}/${ATTEMPT_OF_GUESS}

  ${
    currentAttemp === 0
      ? `Enter 3 numbers (1-5) relavent to the colors:
    1 => RED 🔴
    2 => PURPLE 🟣 
    3 => GREEN 🟢 
    4 => YELLOW 🟡 
    5 => BLUE 🔵 
    Eg: If guess pattern (PURPLE, RED, BLUE) enter 215`
      : ` 1🔴 2🟣 3🟢 4🟡 5🔵 `
  }   
`);
  return playerGuessPattern;
};

const validateGuessPattern = (userInput) => {
  const regEx = /^[1-5]{3}$/;
  let repeatInputNumbers = [];

  if (userInput !== null && userInput !== '') {
    const trimmedUserInput = userInput.trim();
    if (regEx.test(userInput)) {
      let arrayOfThreeNumbers = trimmedUserInput.trim().split('');
      repeatInputNumbers = arrayOfThreeNumbers.filter(
        (item, index) => arrayOfThreeNumbers.indexOf(item) !== index
      );
      if (repeatInputNumbers.length === 0) {
        console.log(trimmedUserInput);
        return true;
      } else {
        alert(`Remove the repeat numbers: ${repeatInputNumbers[0]}`);
        return false;
      }
    } else {
      alert(
        `Bad input! Only three numbers between 1 and 5' : ${trimmedUserInput}`
      );
      return false;
    }
  } else {
    setExitGame(emptyInputCount);
    return false;
  }
};

const generateSecretColorCode = () => {
  const tempColorToChoose = structuredClone(colorToChoose); //Need to replace temp with inital array
  for (let i = 0; i < 3; i++) {
    let randomColorIndex = Math.floor(Math.random() * tempColorToChoose.length);
    secretPattern.push(tempColorToChoose[randomColorIndex]);
    tempColorToChoose.splice(randomColorIndex, 1);
  }

  //   Need remov below text
  colorToChoose.forEach((item) => {
    console.log(item);
  });
  console.log(secretPattern);
};

const convertPlayerGuessPattern = (arr) => {
  const playerGuessArray = Array.from(arr).map((item) => (item -= 1));
  console.log(playerGuessArray);
  return playerGuessArray;
};

const getPlayerGuessPattern = (arr) => {
  const playerGuessPatternColorArray = [];
  convertPlayerGuessPattern(arr).forEach((item) => {
    playerGuessPatternColorArray.push(colorToChoose[item]);
  });
  console.log(playerGuessPatternColorArray);
  return playerGuessPatternColorArray;
};

const checkGuessPattern = (arr) => {
  const isGuess = getPlayerGuessPattern(arr).every(
    (item, index) => item === secretPattern[index]
  );
  console.log(isGuess);
  return isGuess;
};

const setExitGame = (attemt) => {
  if (attemt === 2) {
    alert('Do you want to exit the game.. 👹👹👹');
    gameStatus = true;
  } else if (attemt === 1) {
    alert(
      '👹👹👹 Give the guess pattern. If you not give any patter in next EMPTY attempt game will terminated. 🧞‍♂️'
    );
    getPromptInput();
  } else {
    alert(
      'Give the guess pattern. Are you really sure about your soul...? 👹👹👹'
    );
    getPromptInput();
  }
};

// gameStartInsruction();
generateSecretColorCode();
getPromptInput();

while (!gameStatus && currentAttemp !== ATTEMPT_OF_GUESS) {
  if (!playerGuessPattern) {
    setExitGame(emptyInputCount);
    console.log(playerGuessPattern);
    emptyInputCount += 1;
  } else {
    if (validateGuessPattern(playerGuessPattern)) {
      if (checkGuessPattern(playerGuessPattern)) {
        alert(`You unlocked the code..✅. 💎💎💎⚱️💎💎👑💎💎💎`);
        gameStatus = true;
      } else {
        currentAttemp += 1;
        if (currentAttemp === ATTEMPT_OF_GUESS - 1)
          alert(`One(1) more attemt is left 👹`);
        if (currentAttemp === ATTEMPT_OF_GUESS)
          alert(`Loose attempt 5/5. Game over...☠️ 💀 ☠️`);

        console.log(currentAttemp);
        if (currentAttemp < 5) getPromptInput();
      }
    } else {
      getPromptInput();
      emptyInputCount = 0;
    }
  }
  console.log('end of the game');
}
