// 💬 Typing Effect
let text = "আমার প্রিয় সুখি 💖,আমি যেদিন তোমাকে প্রথম দেখেছিলাম তখন আমি কিছুটা থমকে গিয়েছিলাম, হার্টবিটটা বেড়ে গিয়েছিল কিছুক্ষণের জন্য,কেমন যেন একটা শান্তি অনুভব করলাম, তারপর থেকে আমার সকল চিন্তা জুড়ে শুধু তুমিই ছিলে, তারপর অনেক কষ্ট করে অবশেষে তোমার সাথে কথা বলার সুযোগ হলো। তাই আমি  আমার সেই অপ্রকাশিত অনুভূতিটি প্রকাশ করে বুকের ভারটা  কমাতে চাই। ...";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();

// 🎵 Start
function start() {
    document.getElementById("game").classList.remove("hidden");

    let music = document.getElementById("bgMusic");
    music.play();
}

// 🎮 Game
let number = Math.floor(Math.random() * 3) + 1;

function guess(num) {
    if (num === number) {
        alert("Finally You Find My Message and be ready for reading 💖");

        document.getElementById("terminal").classList.remove("hidden");
        startTerminal();

    } else {
        alert("Please! Try another one for me 😅");
    }
}

// 😎 Hacker Effect
function startTerminal() {
    let term = document.getElementById("terminal");

    let lines = [
        "Initializing system...",
        "Loading feelings...",
        "Analyzing heart...",
        "Target found ❤️",
        "Name detected: Khushi",
        "Preparing message...",
        "System ready..."
    ];

    let i = 0;

    function typeLine() {
        if (i < lines.length) {
            term.innerHTML += lines[i] + "<br>";
            i++;
            setTimeout(typeLine, 700);
        } else {
            showFinalMessage();
        }
    }

    typeLine();
}

// 💖 Final Message
function showFinalMessage() {
    let term = document.getElementById("terminal");

    setTimeout(() => {
        term.innerHTML += "<br>> You are special to me ❤️<br>";
    }, 500);

    setTimeout(() => {
        term.innerHTML += "> I can't hide it anymore...<br>";
    }, 1500);

    setTimeout(() => {
        term.innerHTML += "> তুমি কি আমার সেই সুখের কারণ হবে?🌹🧎<br>";
    }, 2500);

    setTimeout(() => {
        document.getElementById("proposal").classList.remove("hidden");
    }, 4000);
}

// 🎉 YES
function yes() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => confetti(), i * 400);
    }

    alert("You made me the happiest and now I am free from my pain 💖");
    document.getElementById("videoBox").classList.remove("hidden");
}

// 😅 NO
function no() {
    alert("Heartsless,💔 But I Will Keep Trying Until I Find You.");
}