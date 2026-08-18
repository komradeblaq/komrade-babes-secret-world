const enterBtn = document.getElementById("enterBtn");
const welcomeScreen = document.getElementById("welcomeScreen");
const mainWorld = document.getElementById("mainWorld");
const appPages = document.getElementById("appPages");

const pages = {
    love: "lovePage",
    play: "playPage",
    boredom: "boredomPage",
    mood: "moodPage",
    secret: "secretPage",
    memories: "memoriesPage"
};


/* ENTER WEBSITE */

enterBtn.addEventListener("click", function () {

    welcomeScreen.classList.add("hidden");
    mainWorld.classList.remove("hidden");

    sessionStorage.setItem("currentPage", "home");

    history.replaceState(
        { page: "home" },
        "",
        "#home"
    );

});


/* OPEN A PAGE */

function showComingSoon(zone) {

    const zonePages = {

        "Love Zone ❤️": "love",
        "Play Zone 🎮": "play",
        "Boredom Killer 😂": "boredom",
        "Mood Room 🌙": "mood",
        "Secret Zone 👀": "secret",
        "Our Memories 📸": "memories"

    };

    const page = zonePages[zone];

    if (!page) return;

    openPage(page);

}


/* PAGE SYSTEM */

function openPage(page) {

    const pageId = pages[page];

    if (!pageId) return;

    mainWorld.classList.add("hidden");

    appPages.classList.remove("hidden");

    document
        .querySelectorAll(".app-page")
        .forEach(function (element) {
            element.classList.remove("active");
        });

    const selectedPage =
        document.getElementById(pageId);

    selectedPage.classList.add("active");

    sessionStorage.setItem(
        "currentPage",
        page
    );

    history.pushState(
        { page: page },
        "",
        "#" + page
    );

}


/* BACK BUTTON */

function goBack() {

    history.back();

}


/* PHONE BACK BUTTON */

window.addEventListener("popstate", function (event) {

    const page =
        event.state?.page || "home";

    if (page === "home") {

        appPages.classList.add("hidden");

        mainWorld.classList.remove("hidden");

        document
            .querySelectorAll(".app-page")
            .forEach(function (element) {
                element.classList.remove("active");
            });

        sessionStorage.setItem(
            "currentPage",
            "home"
        );

        return;
    }

    openPageWithoutHistory(page);

});


/* OPEN PAGE WITHOUT CREATING NEW HISTORY */

function openPageWithoutHistory(page) {

    const pageId = pages[page];

    if (!pageId) return;

    mainWorld.classList.add("hidden");

    appPages.classList.remove("hidden");

    document
        .querySelectorAll(".app-page")
        .forEach(function (element) {
            element.classList.remove("active");
        });

    document
        .getElementById(pageId)
        .classList.add("active");

    sessionStorage.setItem(
        "currentPage",
        page
    );

}


/* REFRESH PERSISTENCE */

window.addEventListener("load", function () {

    const hash =
        window.location.hash.replace("#", "");

    if (pages[hash]) {

        welcomeScreen.classList.add("hidden");

        mainWorld.classList.add("hidden");

        appPages.classList.remove("hidden");

        openPageWithoutHistory(hash);

    }

});


/* TEMPORARY BUTTONS */

function loveSurprise() {
    alert("❤️ Komrade Blaq says you're special.");
}

function startQuiz() {
    alert("🎮 QUIZ LOADING...");
}

function randomChallenge() {
    alert("😂 Your challenge is coming...");
}

function selectMood(mood) {
    alert("Your mood: " + mood);
}

function secretMessage() {
    alert("🤫 You found the secret.");
}

function memorySurprise() {
    alert("📸 Memory section coming...");
}

function showLoveMessage() {
    alert("❤️ A little message from Komrade Blaq.");
}
