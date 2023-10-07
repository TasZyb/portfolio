const inputValue1 = document.querySelector(".calculator__value1")
const inputValue2 = document.querySelector(".calculator__value2")
const inputValue3 = document.querySelector(".calculator__value3")
const calculaButton = document.querySelector(".calculator__button")
const calculaArea = document.querySelector(".calculator__area")


function plus() {
    if (inputValue3.value==="+"){
        calculaArea.innerHTML = `Результат: ${+inputValue1.value + (+inputValue2.value)}`
    }
    if (inputValue3.value==="-"){
        calculaArea.innerHTML =  `Результат: ${+inputValue1.value - (+inputValue2.value)}`
    }
    if (inputValue3.value==="*"){
        calculaArea.innerHTML =  `Результат: ${+inputValue1.value * (+inputValue2.value)}`
    }
    if (inputValue3.value==="^"){
        calculaArea.innerHTML =  `Результат: ${(+inputValue1.value) ** (+inputValue2.value)}`
    }
    if (inputValue3.value==="/"){
        if (+inputValue2.value===0) {
            calculaArea.innerHTML = "На нуль ділити не можна"
        }
        else{
            calculaArea.innerHTML =  `Результат: ${+inputValue1.value / (+inputValue2.value)}`
        }
    }

}

calculaButton.addEventListener("click", plus)