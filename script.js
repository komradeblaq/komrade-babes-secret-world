/* =========================================
   KOMRADE BABE'S SECRET WORLD ❤️
   APP NAVIGATION SYSTEM
========================================= */

const enterBtn = document.getElementById("enterBtn");
const welcomeScreen = document.getElementById("welcomeScreen");
const mainWorld = document.getElementById("mainWorld");

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupMessage = document.getElementById("popupMessage");
const popupIcon = document.getElementById("popupIcon");


/* =========================================
   WEBSITE STATE
========================================= */

let currentPage =
    sessionStorage.getItem("currentPage") || "home";


/* =========================================
   ENTER WEBSITE
========================================= */

enterBtn.addEventListener("click", () => {

    welcomeScreen.style.opacity = "0";
    welcomeScreen.style.transform = "scale(1.05)";

    setTimeout(() => {

        welcomeScreen.classList.add("hidden");

        mainWorld.classList.remove("hidden");

        navigateTo("home", false);

    }, 500);

});


/* =========================================
   PAGE NAVIGATION
========================================= */

function navigateTo(page, addHistory = true) {

    currentPage = page;

    sessionStorage.setItem("currentPage", page);

    /*
       Save page in browser history.
       This is what makes the phone BACK button work.
    */

    if (addHistory) {

        history.pushState(
            { page: page },
            "",
            "#" + page
        );

    }

    renderPage(page);
}


/* =========================================
   RENDER PAGE
========================================= */

function renderPage(page) {

    /*
       For now we use popups as temporary
       placeholders.

       In the next stage we'll replace these
       with full-screen interactive sections.
    */

    if (page === "home") {

        closePopup();

        return;
    }


    const pages = {

        love: {
            icon: "❤️",
            title: "Love Zone",
            message:
                "Welcome to the Love Zone. Sweet things are waiting for you here. 🥹❤️"
        },

        play: {
            icon: "🎮",
            title: "Play Zone",
            message:
                "Let's see how well you actually know Komrade Blaq. 👀"
        },

        boredom: {
            icon: "😂",
            title: "Boredom Killer",
            message:
                "Boredom has entered the wrong website. 😂"
        },

        mood: {
            icon: "🌙",
            title: "Mood Room",
            message:
                "Tell me how you're feeling and I'll know what to do with you. 🥹❤️"
        },

        secret: {
            icon: "👀",
            title: "Secret Zone",
            message:
                "Hmmmm... you found the secret zone. Are you sure you're ready? 👀"
        },

        memories: {
            icon: "📸",
            title: "Our Memories",
            message:
                "Little moments that deserve to stay forever. ❤️"
        }

    };


    const selectedPage = pages[page];


    if (selectedPage) {

        openPopup(
            selectedPage.icon,
            selectedPage.title,
            selectedPage.message
        );

    }

}


/* =========================================
   PHONE / BROWSER BACK BUTTON
========================================= */

window.addEventListener("popstate", (event) => {

    let page = "home";


    if (event.state && event.state.page) {

        page = event.state.page;

    } else {

        /*
           If there is no history state,
           check the URL hash.
        */

        const hash =
            window.location.hash.replace("#", "");

        if (hash) {
            page = hash;
        }

    }


    currentPage = page;

    sessionStorage.setItem(
        "currentPage",
        page
    );


    renderPage(page);

});


/* =========================================
   HANDLE INITIAL PAGE
========================================= */

function loadInitialPage() {

    const hash =
        window.location.hash.replace("#", "");


    if (hash) {

        currentPage = hash;

    }


    sessionStorage.setItem(
        "currentPage",
        currentPage
    );


    /*
       If she refreshes the website,
       keep her current page.
    */

    if (currentPage !== "home") {

        welcomeScreen.classList.add("hidden");

        mainWorld.classList.remove("hidden");

        renderPage(currentPage);

    }

}


/* =========================================
   POPUP SYSTEM
========================================= */

function openPopup(icon, title, message) {

    popupIcon.textContent = icon;

    popupTitle.textContent = title;

    popupMessage.textContent = message;

    popup.classList.remove("hidden");

}


function closePopup() {

    popup.classList.add("hidden");

}


/* =========================================
   FEATURE CARD NAVIGATION
========================================= */

function showComingSoon(zone) {

    const pages = {

        "Love Zone ❤️": "love",

        "Play Zone 🎮": "play",

        "Boredom Killer 😂": "boredom",

        "Mood Room 🌙": "mood",

        "Secret Zone 👀": "secret",

        "Our Memories 📸": "memories"

    };


    const page = pages[zone];


    if (page) {

        navigateTo(page);

    }

}


/* =========================================
   LOVE MESSAGE
========================================= */

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
        messages[
            Math.floor(
                Math.random() * messages.length
            )
        ];


    openPopup(
        "💗",
        "A little message...",
        randomMessage
    );

}


/* =========================================
   CLOSE POPUP WHEN CLICKING OUTSIDE
========================================= */

popup.addEventListener("click", (event) => {

    if (event.target === popup) {

        closePopup();

    }

});


/* =========================================
   START
========================================= */

loadInitialPage();
