
let button = document.querySelector(".dice-container");
button.addEventListener("click", getAdvice)

function getAdvice() {
    button.style.animation = "spin 1s";

    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            let id = data.slip.id;
            let quote = data.slip.advice;
            console.log(id, quote);
            document.querySelector(".quote").innerHTML = quote;
            document.querySelector(".quote").style.animation = "appear 1s ease-out"
            document.querySelector(".title").innerHTML = "ADVICE #" + id;
            setTimeout(() => {
                document.querySelector(".quote").style.animation = "";
                button.style.animation = ""
            }, 1000)
        })
}

