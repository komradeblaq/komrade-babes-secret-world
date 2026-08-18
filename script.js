const enterBtn = document.getElementById("enterBtn");
const welcomeScreen = document.getElementById("welcomeScreen");
const mainWorld = document.getElementById("mainWorld");

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupMessage = document.getElementById("popupMessage");
const popupIcon = document.getElementById("popupIcon");


/* =========================
   ENTER WEBSITE
========================= */

enterBtn.addEventListener("click", () => {

    welcomeScreen.style.opacity = "0";
    welcomeScreen.style.transform = "scale(1.05)";

    setTimeout(() => {

        welcomeScreen.classList.add("hidden");

        mainWorld.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 500);

});


/* =========================
   POPUP SYSTEM
========================= */

function openPopup(icon, title, message) {

    popupIcon.textContent = icon;

    popupTitle.textContent = title;

    popupMessage.textContent = message;

    popup.classList.remove("hidden");

}


function closePopup() {

    popup.classList.add("hidden");

}


/* =========================
   COMING SOON
========================= */

function showComingSoon(zone) {

    openPopup(
        "👀",
        zone,
        "This secret section is still being prepared... but trust me, it's going to be worth the wait. 😌❤️"
    );

}


/* =========================
   LOVE MESSAGE
========================= */

function showLoveMessage() {

    const messages = [

        "Just checking... are you smiling right now? 😂❤️",

        "Komrade Blaq has officially ordered you to stop being bored. 😌",

        "If boredom is disturbing you, come and disturb me instead. 😂❤️",

        "You are currently inside a website made because somebody cares about you. 🥹❤️",

        "Plot twist: I might have made this website just so I can make you smile. 👀❤️",

        "Congratulations. You found a random little piece of Komrade Blaq's heart. ❤️"

    ];

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    openPopup(
        "💗",
        "A little message...",
        randomMessage
    );

}


/* =========================
   CLOSE POPUP WHEN CLICKING OUTSIDE
========================= */

popup.addEventListener("click", (event) => {

    if (event.target === popup) {
        closePopup();
    }

});
