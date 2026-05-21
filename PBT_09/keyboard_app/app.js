const app = document.querySelector("#app");

const images = [
    "https://placehold.co/800x500?text=Image+1",
    "https://placehold.co/800x500?text=Image+2",
    "https://placehold.co/800x500?text=Image+3",
    "https://placehold.co/800x500?text=Image+4",
    "https://placehold.co/800x500?text=Image+5"
];

const commands = [
    "Open Home",
    "Open Settings",
    "Open Profile",
    "Toggle Dark Mode",
    "Logout"
];

let currentIndex = 0;

let slideshow = null;

let paletteOpen = false;

const container = document.createElement("div");
container.classList.add("container");

app.appendChild(container);

const title = document.createElement("h1");
title.textContent = "Keyboard Navigation App";

container.appendChild(title);

const gallery = document.createElement("div");
gallery.classList.add("gallery");

container.appendChild(gallery);

const image = document.createElement("img");

image.src = images[currentIndex];

image.alt = "Gallery Image";

gallery.appendChild(image);

const controls = document.createElement("div");
controls.classList.add("gallery-controls");

gallery.appendChild(controls);

const prevBtn = document.createElement("button");

prevBtn.textContent = "← Prev";

prevBtn.setAttribute(
    "aria-label",
    "Previous image"
);

const nextBtn = document.createElement("button");

nextBtn.textContent = "Next →";

nextBtn.setAttribute(
    "aria-label",
    "Next image"
);

const playBtn = document.createElement("button");

playBtn.textContent = "Play";

playBtn.setAttribute(
    "aria-label",
    "Play slideshow"
);

controls.append(
    prevBtn,
    playBtn,
    nextBtn
);

const instructions = document.createElement("div");

instructions.classList.add("instructions");

instructions.innerHTML = `
    <h2>Keyboard Shortcuts</h2>

    <ul>
        <li>← → : Change image</li>
        <li>1-9 : Jump to image</li>
        <li>Space : Play/Pause slideshow</li>
        <li>Ctrl + K : Open command palette</li>
        <li>Escape : Close modal</li>
        <li>Tab : Navigate focus</li>
    </ul>
`;

container.appendChild(instructions);

function renderImage() {

    image.src = images[currentIndex];
}

function nextImage() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    renderImage();
}

function prevImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    renderImage();
}

function toggleSlideshow() {

    if (slideshow) {

        clearInterval(slideshow);

        slideshow = null;

        playBtn.textContent = "Play";
    }

    else {

        slideshow = setInterval(() => {

            nextImage();

        }, 2000);

        playBtn.textContent = "Pause";
    }
}

function openCommandPalette() {

    if (paletteOpen) return;

    paletteOpen = true;

    const overlay = document.createElement("div");

    overlay.classList.add("modal-overlay");

    overlay.id = "paletteOverlay";

    const palette = document.createElement("div");

    palette.classList.add("command-palette");

    const input = document.createElement("input");

    input.classList.add("command-input");

    input.placeholder = "Type a command...";

    input.setAttribute(
        "aria-label",
        "Command search"
    );

    const list = document.createElement("div");

    list.classList.add("command-list");

    commands.forEach(command => {

        const item = document.createElement("div");

        item.classList.add("command-item");

        item.textContent = command;

        item.tabIndex = 0;

        list.appendChild(item);
    });

    palette.append(
        input,
        list
    );

    overlay.appendChild(palette);

    document.body.appendChild(overlay);

    input.focus();

    input.addEventListener("input", () => {

        const keyword =
            input.value.toLowerCase();

        list.innerHTML = "";

        commands
            .filter(command =>
                command
                    .toLowerCase()
                    .includes(keyword)
            )
            .forEach(command => {

                const item =
                    document.createElement("div");

                item.classList.add("command-item");

                item.textContent = command;

                item.tabIndex = 0;

                list.appendChild(item);
            });
    });

    input.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {

            const first =
                list.querySelector(".command-item");

            if (first) {

                alert(
                    "Selected: " +
                    first.textContent
                );

                closePalette();
            }
        }

        if (e.key === "Escape") {
            closePalette();
        }
    });
}

function closePalette() {

    const overlay =
        document.querySelector("#paletteOverlay");

    if (overlay) {

        overlay.remove();

        paletteOpen = false;
    }
}

prevBtn.addEventListener("click", prevImage);

nextBtn.addEventListener("click", nextImage);

playBtn.addEventListener("click", toggleSlideshow);

document.addEventListener("keydown", (e) => {

    if (
        e.target.tagName === "INPUT"
    ) return;

    if (e.key === "ArrowRight") {
        nextImage();
    }

    if (e.key === "ArrowLeft") {
        prevImage();
    }

    if (
        e.key >= "1" &&
        e.key <= "9"
    ) {

        const index =
            Number(e.key) - 1;

        if (images[index]) {

            currentIndex = index;

            renderImage();
        }
    }

    if (e.code === "Space") {

        e.preventDefault();

        toggleSlideshow();
    }

    if (
        e.ctrlKey &&
        e.key.toLowerCase() === "k"
    ) {

        e.preventDefault();

        openCommandPalette();
    }

    if (e.key === "Escape") {

        closePalette();
    }
});