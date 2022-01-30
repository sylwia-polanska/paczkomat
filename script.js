function goToStep1(){
    const step1Element = document.getElementById("step1");
    step1Element.classList.remove("hidden");
    const step0Element = document.getElementById("step0");
    step0Element.classList.add("hidden");
}

