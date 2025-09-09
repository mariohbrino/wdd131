const nav = document.querySelector(".nav");
const menu = document.querySelector("#menu");
const header = document.querySelector("header");
const headerInfo = document.querySelector(".header-info");
const copyright = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const headerToggle = (isOpen) => {
    if (isOpen) {
        header.style.alignItems = "center";
    } else {
        header.style.alignItems = "start";
    }
}

const navToggle = (isOpen) => {
    if (isOpen) {
        nav.style.display = "none";
        nav.style.visibility = "hidden";
    } else {
        nav.style.display = "block";
        nav.style.visibility = "visible";
    }
}

const headerInfoToggle = (isOpen) => {
    if (isOpen) {
        headerInfo.style.display = "block";
        headerInfo.style.visibility = "visible";
    } else {
        headerInfo.style.display = "none";
        headerInfo.style.visibility = "hidden";
    }
}

const closeMenu = () => {
    menu.setAttribute("aria-label", "close");
    menu.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        <span id="menu-label">Close</span>
    `;
};

const openMenu = () => {
    menu.setAttribute("aria-label", "open");
    menu.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
        <span id="menu-label">Open</span>
    `;
};

const isMenuOpen = () => {
    const ariaLabel = menu.getAttribute("aria-label");
    const isOpen = ariaLabel === "open";
    return isOpen;
}

menu.addEventListener("click", (event) => {
    const isOpen = isMenuOpen();
    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    };
    navToggle(isOpen);
    headerInfoToggle(isOpen);
    headerToggle(isOpen);
});

window.addEventListener("resize", () => {
    const currentWidth = window.innerWidth;
    const breakpoint = 1024;

    if (currentWidth >= breakpoint) {
        nav.style.display = "block";
        nav.style.visibility = "visible";
        headerInfo.style.display = "block";
        headerInfo.style.visibility = "visible";
    } else {
        nav.style.display = "none";
        nav.style.visibility = "hidden";
    }
});

const today = new Date();

copyright.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `${document.lastModified}`;
