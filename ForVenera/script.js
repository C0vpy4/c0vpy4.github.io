let numberToConvert = document.getElementById("number");
numberToConvert.innerHTML += Math.floor((Math.random() * 200));
console.log(numberToConvert)

const parentElement = document.querySelector(".variants");
const childCount = parentElement.children.length;
numberToConvert = 8 * parseInt(document.getElementById("number").textContent);

const randomIndex = Math.floor(Math.random() * childCount);

for (let i = 0; i < childCount; i++) {
    if (i === randomIndex) {
        parentElement.children[i].textContent = numberToConvert;
    } else {
        parentElement.children[i].textContent = 8 * Math.floor(Math.random() * 100);
    }
}

let error = 0;
let animateId;
let previousError = 0;


document.querySelector(".variants").addEventListener('click', e => {
    if (e.target.classList.contains('variant')) {
        const text = e.target.textContent;
        if (text == (document.getElementById("number").textContent * 8)) {
            e.target.style.background = 'green';
            e.target.style.border = 'green';
            e.target.style.color = 'white';
            e.target.style.pointerEvents = 'none';
            var textDiv = document.createElement("div");
            textDiv.className = "textBox";

            var pElement = document.createElement("div");
            pElement.className = "text"
            pElement.innerHTML = "You Win";
            pElement.style.color = "green"
            textDiv.appendChild(pElement);

            function locationReload(){
                location.reload();
            }
            var svgReload = document.createElement("img");
            svgReload.src = "./img/Rel.svg";
            svgReload.onclick =  locationReload;
            pElement.appendChild(svgReload)


            // Добавляем errorDiv внутрь тега body
            document.body.appendChild(textDiv);
        } else {
            e.target.style.background = 'red';
            e.target.style.border = 'red';
            e.target.style.color = 'white';
            e.target.style.pointerEvents = 'none';

            previousError = error;
            error += 50; // Увеличиваем значение ошибки на 20

            cancelAnimationFrame(animateId);

            const start = performance.now();
            const duration = 500; // Продолжительность анимации в миллисекундах

            function updateBackground(timestamp) {
                const elapsed = timestamp - start;
                const progress = Math.min(elapsed / duration, 1);

                const currentError = previousError + (error - previousError) * progress;
                const gradient = `linear-gradient(to top, #111111 ${currentError}%, #ffffff 0%)`;

                document.body.style.background = gradient;

                if (elapsed < duration) {
                    animateId = requestAnimationFrame(updateBackground);
                }
            }

            animateId = requestAnimationFrame(updateBackground);
        }
        console.log(error)
        if (error == 50) {
            document.querySelector(".variants").style.color = "white";
        }

        if (error == 100) {
            var errorDiv = document.createElement("div");
            errorDiv.className = "error";
            document.body.appendChild(errorDiv);
            setTimeout(setElementError, 1000)
        }
    }
    function setElementError() {
        var textDiv = document.createElement("div");
        textDiv.className = "textBox";

        var pElement = document.createElement("div");
        pElement.className = "text"
        pElement.innerHTML = "You lose";
        textDiv.appendChild(pElement);

        function locationReload(){
            location.reload();
        }
        var svgReload = document.createElement("img");
        svgReload.src = "./img/Rel.svg";
        svgReload.onclick =  locationReload;
        pElement.appendChild(svgReload)


        // Добавляем errorDiv внутрь тега body
        document.body.appendChild(textDiv);
    }

});
