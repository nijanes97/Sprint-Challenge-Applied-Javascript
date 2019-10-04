/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselImgs = [];
// C:\Users\nickj\Desktop\Lambda School\Sprint-V\Sprint-Challenge-Applied-Javascript\components\Carousel
// C:\Users\nickj\Desktop\Lambda School\Sprint-V\Sprint-Challenge-Applied-Javascript\assets\carousel
//assets\carousel\computer.jpeg
carouselImgs.push("./assets/carousel/computer.jpeg");
carouselImgs.push("./assets/carousel/mountains.jpeg");
carouselImgs.push("./assets/carousel/trees.jpeg");
carouselImgs.push("./assets/carousel/turntable.jpeg");

const carouselContainer = document.querySelector('.carousel-container');
console.log(carouselContainer);

carouselContainer.appendChild(carouselCreator(carouselImgs));



function carouselCreator(imgs) {
  const carousel = document.createElement('div');
  const leftbtn = document.createElement('div');
  const rightbtn = document.createElement('div');

  carousel.classList.add('carousel');
  leftbtn.classList.add('left-button');
  rightbtn.classList.add('right-button');

  carousel.appendChild(leftbtn);
  imgs.forEach(img =>{
    const tempImg = document.createElement('img');
    tempImg.src = img;
    carousel.appendChild(tempImg);
  })
  carousel.appendChild(rightbtn);
  console.log(carousel);

  return carousel;
}