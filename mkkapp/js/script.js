var counter = 0;
const circleParent = document.querySelector(".elements--points").children;
const circle = document.querySelector(".circl");
const heading = document.getElementById("heading");
const subtitle = document.getElementById("subtitle");
console.log(subtitle);

console.log(circleParent[0]);

const arrHeading = ["Мы - за совесть", "Мы - за справедливость"]
const arrSubtitle = ["Коллегия с большим опытом работы. Множеством отзывов. И надёжностью", "Добросовестное исполнение своего долга - это про нас"]

const sliderButton = document.querySelector(".elements--button").addEventListener("click", e => {
    circleParent[counter].classList.remove("slide");
    counter++;
    if (counter >= circleParent.length) {
        counter = 0;
    }
    circleParent[counter].classList.add("slide");

    heading.innerHTML = "";
    heading.append(arrHeading[counter]);
    subtitle.innerHTML = "";
    subtitle.append(arrSubtitle[counter]);

    const containerText = document.querySelector(".container--text").animate([
        {opacity: "0"},
        {opacity: "1"}
    ],{
        duration: 2000,
        iterations: 1
    });
    // containerText.classList.remove("animate");
    // containerText.offsetHeight; // Принудительно вызываем перерисовку элемента
    // // setTimeout(containerText.classList.add("animate"), 100)
    // // containerText.classList.add("animate");
});

