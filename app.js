const dice = document.querySelector("#dice")
const advice = document.querySelector("#advice")
const adviceId = document.querySelector("#adviceid")


async function fetchAdvice(){
    const data = await fetch("https://api.adviceslip.com/advice")
    const {slip} = await data.json()
    adviceId.innerText = `ADVICE #${slip.id}`
    advice.innerText = `"${slip.advice}"`
}

dice.addEventListener('click',fetchAdvice);