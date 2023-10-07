const entry = document.querySelector(".entry")
const button = document.querySelector(".click")
const text = document.querySelector(".text")



function text_for_p() {
    console.log(entry.value);
    text.innerHTML += `<h4 class="text2">${entry.value}</h4>`
}

button.addEventListener("click", text_for_p)