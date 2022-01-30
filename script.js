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

function removeClassHidden(elementId){
    const stepElement = document.getElementById(elementId);
    stepElement.classList.remove("hidden");
} 

function addClassHidden(elementId){
    const stepElement = document.getElementById(elementId);
    stepElement.classList.add("hidden");
}

