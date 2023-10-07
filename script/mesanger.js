const wrapper_button = document.querySelector(".wraper__button")
const wrapper_text = document.querySelector(".wraper__text")
const wrapper_input = document.querySelector(".wraper__input")
const wraper = document.querySelector(".message")
const open_button = document.querySelector(".open")
const close_button = document.querySelector(".close")

function send_text() {
    let time = new Date()
    if (wrapper_input.value!=="") {
        wrapper_text.innerHTML += `<div class="mesange">
                                    <p class="mesange__text">${wrapper_input.value}</p>
                                    <p class="mesange__data">${time.getHours()}:${time.getMinutes()}</p>
                                </div>`
    }
    
    if (wrapper_input.value === "Доброго дня!") {
        setTimeout(() => {
            wrapper_text.innerHTML += `<div class="mesange">
                                    <p class="mesange__text">Доброго Дня</p>
                                    <p class="mesange__data">${time.getHours()}:${time.getMinutes()}</p>
                                </div>`
        }, 500);
        
    }
    if (wrapper_input.value === "Чи могли б ви мені допомогти?") {
        setTimeout(() => {
            wrapper_text.innerHTML += `<div class="mesange">
                                    <p class="mesange__text">Так, звичайно, що саме вас цікавить?</p>
                                    <p class="mesange__data">${time.getHours()}:${time.getMinutes()}</p>
                                </div>`
        }, 500);
        
    }
}
function open_messange() {
    wraper.style.display = "block"
}
function close_messang() {
    wraper.style.display = "none"
}


wrapper_button.addEventListener("click", send_text)
open_button.addEventListener("click", open_messange)
close_button.addEventListener("click", close_messang)