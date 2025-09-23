const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "images/temples/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "images/temples/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/temples/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "images/temples/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "images/temples/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/temples/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "images/temples/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Billings Montana",
    location: "Billings, Montana",
    dedicated: "1998, March, 30",
    area: 33800,
    imageUrl:
    "images/temples/01-Billings-Montana-Temple-2220702.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego California",
    dedicated: "1988, February, 27",
    area: 72000,
    imageUrl:
    "images/temples/san-diego-temple-765109-wallpaper.jpg"
  },
  {
    templeName: "Calgary Alberta",
    location: "Calgary, Alberta",
    dedicated: "2010, May, 15",
    area: 33000,
    imageUrl:
    "images/temples/calgary-albert-temple-lds-1059122-wallpaper.jpg"
  },
];

const mainTemple = document.querySelector(".temples");
const navLinks = document.querySelector(".nav-links");

const filteredTemples = (menu) => {
    return temples.filter((temple) => {
        if (menu === "Home") {
            return temple;
        } else if (menu === "Old") {
            const dedicated = new Date(temple.dedicated);
            return dedicated.getFullYear() < 1900;
        } else if (menu === "New") {
            const dedicated = new Date(temple.dedicated);
            return dedicated.getFullYear() > 2000;
        } else if (menu === "Large") {
            return temple.area > 90000;
        } else if (menu === "Small") {
            return temple.area < 10000;
        }
    });
};

navLinks.addEventListener('click', (event) => {
    event.preventDefault();
    const menu = event.target.innerHTML
    const filtered = filteredTemples(menu);
    templeCards(filtered, menu);
});

const templeCards = (temples, title = "Home") => {
    const templesList = document.createElement("div");
    const h1 = document.createElement("h1");
    mainTemple.innerHTML = "";
    h1.innerHTML = `Temple - ${title}`;
    templesList.classList.add("temples-list");
    mainTemple.appendChild(h1);
    mainTemple.appendChild(templesList);
    temples.forEach((temple) => {
        const card = document.createElement("section");
        const cardHeader = document.createElement("div");
        const cardImage = document.createElement("div");
        const h2 = document.createElement("h2");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        h2.innerHTML = temple.templeName;
        location.innerHTML = `<span class="label">Location</span>: ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated</span>: ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size</span>: ${temple.area.toLocaleString()} sq ft`;
        image.classList.add("image-temple");
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");

        card.classList.add("temple-card");
        cardHeader.classList.add("temple-header");
        cardImage.classList.add("temple-image");

        cardHeader.appendChild(h2);
        cardHeader.appendChild(location);
        cardHeader.appendChild(dedicated);
        cardHeader.appendChild(area);
        cardImage.appendChild(image);

        card.appendChild(cardHeader);
        card.appendChild(cardImage);

        templesList.appendChild(card);
    });
};

const nav = document.querySelector(".nav");
const menu = document.querySelector("#menu");
const header = document.querySelector("header");
const headerInfo = document.querySelector(".header-info");
const copyright = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

templeCards(temples);

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
