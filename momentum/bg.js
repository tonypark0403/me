const body = document.querySelector('body');

const IMG_NUMBER = 3;

function hanldeImgLoad() {
  console.log('test');
}

function paintImage(imgNumber) {
  const image = new Image();
  // img.src = `/images/${imgNumber + 1}.jpg`
  image.src = 'https://source.unsplash.com/random';
  // image.addEventListener('loaded', hanldeImgLoad); // needed when get data from api
  image.classList.add('bgImage');
  body.prepend(image);
}

// when we have a photo array
function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER); // 0 ~ 2
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
