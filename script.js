let startTime;
let endTime;

function goToStep1(){
    removeClassHidden("step1");
    addClassHidden("step0");
    addClassHidden("step2");
    startTime = performance.now();
}

function goToStep2(){
    if (validateInputs()){
        removeClassHidden("step2");
        addClassHidden("step0");
        addClassHidden("step1");
        endTime = performance.now();
        displayTimeTaken();
    } else{
        displayModal();
    }
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

    return phoneInputElement.checkValidity() && pickupCodeInputElement.checkValidity();
}

function closeModal(){
    addClassHidden("modal");
}

function displayModal(){
    removeClassHidden("modal");
}

function displayTimeTaken(){
    const timeTakenElement = document.getElementById("timeTaken");
    const timeTaken = Math.round((endTime - startTime)/1000);

    timeTakenElement.innerHTML = timeTaken;
}