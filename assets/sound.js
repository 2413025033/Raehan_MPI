let music;

function initSound() {
    if (!music) {
        music = new Audio("assets/audio/music.mp3");
        music.loop = true;
        music.preload = "auto";

        // global biar semua halaman pakai 1 musik
        window.musicGlobal = music;
    }

    let status = localStorage.getItem("sound");

    if (status === null) {
        status = "on";
        localStorage.setItem("sound", "on");
    }

    if (status === "on") {
        music.play().catch(() => {});
    }

    updateIcon(status);
}

function toggleSound() {
    let status = localStorage.getItem("sound");

    if (status === "on") {
        music.pause();
        localStorage.setItem("sound", "off");
        updateIcon("off");
    } else {
        music.play().catch(() => {});
        localStorage.setItem("sound", "on");
        updateIcon("on");
    }
}

function updateIcon(status) {
    const btn = document.querySelector(".sound");
    if (!btn) return;

    btn.innerText = status === "on" ? "🔇" : "♪";
}

window.addEventListener("load", initSound);