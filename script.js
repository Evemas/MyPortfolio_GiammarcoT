// ANIMAZIONE TITOLO TYPING
const titleText = "Giammarco Talò__web developer"
const typingSpeed = 100;
const titleElement = document.getElementById("title");
let charIndex = 0;
function typeTitle() {
    if (charIndex < titleText.length) {
        titleElement.textContent += titleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeTitle, typingSpeed);
    }
}
window.addEventListener("load", typeTitle);


const cardText = "Ciao! Sono Giammarco Talò e sono uno studente 'Full-stack Web Developer' in cerca di occupazione"
const typingSpeed2 = 100;
const cardElement = document.getElementById("cardp");
let charIndex2 = 0;
function typeTitle2() {
    if (charIndex2 < cardText.length) {
        cardElement.textContent += cardText.charAt(charIndex2);
        charIndex2++;
        setTimeout(typeTitle2, typingSpeed2);
    }
}
window.addEventListener("load", typeTitle2);
