/* =========================================
   KOMRADE BABE'S SECRET WORLD ❤️
========================================= */


const enterBtn =
    document.getElementById("enterBtn");

const welcomeScreen =
    document.getElementById("welcomeScreen");

const mainWorld =
    document.getElementById("mainWorld");

const appPages =
    document.getElementById("appPages");


/* =========================================
   PAGE DATA
========================================= */

const pageMap = {

    love: "lovePage",

    play: "playPage",

    boredom: "boredomPage",

    mood: "moodPage",

    secret: "secretPage",

    memories: "memoriesPage"

};


/* =========================================
   CURRENT PAGE
========================================= */

let currentPage =
    sessionStorage.getItem("currentPage")
    || "home";


/* =========================================
   ENTER WEBSITE
========================================= */

enterBtn.addEventListener("click", () => {

    welcomeScreen.style.opacity = "0";

    welcomeScreen.style.transform =
        "scale(1.05)";


    setTimeout(() => {

        welcomeScreen.classList.add("hidden");

        mainWorld.classList.remove("hidden");

        navigateTo("home", true);

    }, 500);

});


/* =========================================
   NAVIGATION
========================================= */

function navigateTo(
    page,
    addHistory = true
) {

    currentPage = page;

    sessionStorage.setItem(
        "currentPage",
        page
    );


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
       HOME
    */

    if (page === "home") {

        appPages.classList.add("hidden");

        mainWorld.classList.remove("hidden");

        document
            .querySelectorAll(".app-page")
            .forEach(page => {

                page.classList.remove("active");

            });

        return;

    }


    /*
       APP PAGE
    */

    mainWorld.classList.add("hidden");

    appPages.classList.remove("hidden");


    document
        .querySelectorAll(".app-page")
        .forEach(pageElement => {

            pageElement.classList.remove("active");

        });


    const pageId =
        pageMap[page];


    if (pageId) {

        const selected =
            document.getElementById(pageId);

        if (selected) {

            selected.classList.add("active");

        }

    }

}


/* =========================================
   GO BACK
========================================= */

function goBack() {

    history.back();

}


/* =========================================
   PHONE BACK BUTTON
========================================= */

window.addEventListener(
    "popstate",
    event => {

        let page = "home";


        if (
            event.state &&
            event.state.page
        ) {

            page =
                event.state.page;

        } else {

            const hash =
                window.location.hash
                    .replace("#", "");


            if (pageMap[hash]) {

                page = hash;

            }

        }


        currentPage = page;


        sessionStorage.setItem(
            "currentPage",
            page
        );


        renderPage(page);

    }
);


/* =========================================
   LOAD PAGE AFTER REFRESH
========================================= */

function loadInitialPage() {

    const hash =
        window.location.hash
            .replace("#", "");


    if (pageMap[hash]) {

        currentPage = hash;

    }


    sessionStorage.setItem(
        "currentPage",
        currentPage
    );


    if (currentPage === "home") {

        return;

    }


    /*
       Skip welcome screen when
       refreshing inside a page.
    */

    welcomeScreen.classList.add(
        "hidden"
    );

    mainWorld.classList.add(
        "hidden"
    );

    appPages.classList.remove(
        "hidden"
    );


    renderPage(currentPage);

}


/* =========================================
   FEATURE CARD CONNECTION
========================================= */

function showComingSoon(zone) {

    const zones = {

        "Love Zone ❤️":
            "love",

        "Play Zone 🎮":
            "play",

        "Boredom Killer 😂":
            "boredom",

        "Mood Room 🌙":
            "mood",

        "Secret Zone 👀":
            "secret",

        "Our Memories 📸":
            "memories"

    };


    const page =
        zones[zone];


    if (page) {

        navigateTo(page);

    }

}


/* =========================================
   LOVE SURPRISE
========================================= */

function loveSurprise() {

    const messages = [

        "You are somebody's favorite notification. ❤️",

        "Komrade Blaq thinks you're beautiful. Don't argue. 😂❤️",

        "Somebody somewhere is smiling because you exist. 🥹",

        "This website wouldn't exist if you weren't special. ❤️",

        "Okay babe... enough smiling. 😂❤️"

    ];


    const message =
        messages[
            Math.floor(
                Math.random()
                * messages.length
            )
        ];


    alert(message);

}


/* =========================================
   BOREDOM KILLER
========================================= */

function randomChallenge() {

    const challenges = [

        "Send Komrade Blaq a random selfie. 😂",

        "Describe your current mood using only 3 emojis.",

        "Close your eyes and think about your favorite memory with me. ❤️",

        "Send me the first thought that enters your head. 👀",

        "Dance for 10 seconds. Nobody needs to know. 😂",

        "Tell me one thing you want us to do together someday. ❤️"

    ];


    const challenge =
        challenges[
            Math.floor(
                Math.random()
                * challenges.length
            )
        ];


    alert(
        "🎯 YOUR CHALLENGE\n\n"
        + challenge
    );

}


/* =========================================
   MOOD SYSTEM
========================================= */

function selectMood(mood) {

    const responses = {

        happy:
            "I knew you were going to choose this one. 😍 Keep smiling ❤️",

        bored:
            "Bored?! 😭 Okay. Komrade Blaq has work to do. 😂",

        sad:
            "Come here 🥺❤️ You don't have to pretend you're okay.",

        romantic:
            "Omooo 👀❤️ Somebody is feeling romantic tonight.",

        angry:
            "Who offended my babe? 😤😂",

        playful:
            "Ahhh 😂 I can already see trouble coming."

    };


    alert(
        responses[mood]
    );

}


/* =========================================
   SECRET ZONE
========================================= */

function secretMessage() {

    alert(
        "🤫 SECRET FOUND\n\n"
        + "Komrade Blaq left this here:\n\n"
        + "You are more special than you probably realize. ❤️"
    );

}


/* =========================================
   MEMORY SURPRISE
========================================= */

function memorySurprise() {

    alert(
        "📸 MEMORY\n\n"
        + "This section is going to become our "
        + "interactive memory timeline. ❤️"
    );

}


/* =========================================
   START QUIZ
========================================= */

function startQuiz() {

    alert(
        "🎮 GAME STARTING...\n\n"
        + "Next update: the full "
        + "How Well Do You Know Komrade Blaq? game. 👀🔥"
    );

}


/* =========================================
   START
========================================= */

loadInitialPage();
