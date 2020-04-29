let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow_left"),
    arrowRight = document.querySelector("#arrow_right"),
    current = 0;
//current repræsentere hvilket billede/slide man er på om som standart er den på 0. Da det første billede/silde bliver kaldt 0 i rækkefølgen af billeder


//Jeg starter med at lave en reset funktion, fordi hver gang vi ser et nyt billede vil vi fjerne alle de andre billeder.
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

// Init slider
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}



//show prev
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block"
    current--;
}
//I denne finktion for vi den venstre pil til at ”virke” ved at når man trykker på pilen skal den kigge på sliderimage og ud fra dens current iteruratens skal den fjerne 1 og så vise det billede i stedet, hvilke gør at current nu skal formindskes med 1 så derfor skriver jeg current --


// show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block"
    current++;
}
//Vi gør de sammen I denne funkion som i den sidste, her skal vi dog bar forstørre den med en da vi vil gå frem i billederne.


//Left arrow click
arrowLeft.addEventListener("click", function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});
//Vi sætter en if sætning som lyder på at hvis current er lig med 0, så vil vi sætter currenten til at være lig med sliderimage.length. som er det totale nummer af billeder i slideren, hvilket får det til at gå til det sidste billede.
//    slideLeft(); her kalder vi på funktionen slideleft og vi har lige ovenover sat current til et være 3 med sliderimage.length som nu er 4, men jeg vil gerne have at den trækker en fra, da vores tabel starter med 0 så derfor hedder det sidste billet entlig 3, dette gør den i funktionen slideLeft, hvor vi jo minusser currenten med 1


//Right arrow click
arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});
//Denne funktion er meget lig den over men her vil vi gerne gå fra af.
//Derfor laver vi en if sætning så hvis current er lig med sliderimage.length – 1 altså 3, så hvis det er sandt vil nu have currenten til at være lig med -1, for at når den går vider til funktionen slideRight så ligger den jo 1 til current, så den på den måde bliver 0 og derfor går til det førtste billede i rækken.
