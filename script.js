function goToStep1(){
    removeClassHidden("step1");
    addClassHidden("step0");
    addClassHidden("step2");
}

function goToStep2(){
    removeClassHidden("step2");
    addClassHidden("step0");
    addClassHidden("step1");
}

function goToStep0(){
    removeClassHidden("step0");
    addClassHidden("step1");
    addClassHidden("step2");
}

function removeClassHidden(elementId){
    const stepElement = document.getElementById(elementId);
    stepElement.classList.remove("hidden");
} 

function addClassHidden(elementId){
    const stepElement = document.getElementById(elementId);
    stepElement.classList.add("hidden");
}

function validateInputs(){
    const phoneInputElement = document.getElementById("phone");
    const pickupCodeInputElement = document.getElementById("pickupCode");
    const pickupButton = document.getElementById("pickupButton");

    if (phoneInputElement.checkValidity() && pickupCodeInputElement.checkValidity()){
        pickupButton.removeAttribute("disabled");
    } else{
        pickupButton.setAttribute("disabled", null);
    }
}