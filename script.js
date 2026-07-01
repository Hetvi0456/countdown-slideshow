let timer = document.querySelector(".counter p");
let image = document.querySelector(".imgDiv img");
let imageSources = Array.from({ length: 11 }, (_, index) => `assets/${index}.jpg`);

// for (let i=10; i>=0; i--)
// {
//     setTimeout(() => {
//         timer.innerHTML = i;
//     }, 1000 );
// }
let counter = 10;
let imageIndex = 0;
const intervalId = setInterval(() => {
    image.src = imageSources[imageIndex];
    timer.innerHTML = counter;
    if (counter === 0)
    {
        clearInterval(intervalId);
        return;
    }
    counter--;
    imageIndex++;
}, 1000);