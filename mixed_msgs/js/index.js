const msgBits = {
  animals: [
    'cow',
    'sheep',
    'chicken',
    'duck',
    'horse',
    'arctic seal',
    'giraffe',
    'rainbow trout'
  ],
  foods: [
    'grass',
    'lettuce',
    'sweetcorn',
    'ham',
    'pasta bake',
    'weeds',
    'flies',
    'shrimp'
  ],
  feelings: [
    'unhappy 🙁',
    'happy 🙂',
    'depressed 😩',
    'angry 😠',
    'silly 😛',
    'elated 😄'
  ],
  picUrls: [
    'pics/01_cow.jpg',
    'pics/02_sheep.jpg',
    'pics/03_chicken.jpg',
    'pics/04_duck.jpg',
    'pics/05_horse.jpg',
    'pics/06_seal.jpg',
    'pics/07_giraffe.jpg',
    'pics/08_trout.jpg'
  ]
};

function getRandomNum(arrLength) {
  if (arrLength <= 0) return undefined;

  return Math.floor(Math.random() * arrLength);
}

function displayRandomMsgHTML(obj) {
  /* Takes in obj with animal, food, feelings, pic

    Returns an innerHTML string, with span classes */

  let result = `This is a <span class="animal">${obj.animal}</span> 
  eating some <span class="food">${obj.food}</span> 
  and feeling <span class="mood">${obj.feeling}</span>`;  
  document.getElementById('img-animal').setAttribute('src', obj.pic);
  return document.getElementById('msg-js').innerHTML = result;
}


function messageCreate(msgBits) {
  const animalNum = getRandomNum(msgBits.animals.length);
  const animal = msgBits.animals[animalNum];
  const picUrl = msgBits.picUrls[animalNum];
  const food = msgBits.foods[getRandomNum(msgBits.foods.length)];
  const feeling = msgBits.feelings[getRandomNum(msgBits.feelings.length)];
  return {
    animal: animal,
    food: food,
    feeling: feeling,
    pic: picUrl
  };
}

displayRandomMsgHTML(messageCreate(msgBits));

function changeMsg() {  
  displayRandomMsgHTML(messageCreate(msgBits));
}

