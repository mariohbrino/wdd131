const menuLinks = [
    {
        "name": "Home",
        "url": "/project/index.html"
    },
    {
        "name": "Teams",
        "url": "/project/teams.html"
    },
    {
        "name": "Drivers",
        "url": "/project/drivers.html"
    },
    {
        "name": "Cars",
        "url": "/project/cars.html"
    },
    {
        "name": "Site Plan",
        "url": "/project/siteplan.html"
    },
];

const asideLinks = [
    {
        "name": "Formula 1",
        "url": "https://www.formula1.com/en"
    },
    {
        "name": "2024 Races",
        "url": "https://www.formula1.com/en/results/2024/races"
    },
    {
        "name": "2024 Awards",
        "url": "https://www.formula1.com/en/results/2024/awards/fastest-laps"
    }
];

const SetNavigation = (id, navigation, target="_self") => {
    const navigationElement = document.querySelector(id);
    const ulElement = document.createElement("ul");
    
    navigation.forEach(menu => {
        const liElement = document.createElement("li");
        const aElement = document.createElement("a");
        aElement.href = menu.url;
        aElement.target = target
        aElement.textContent = menu.name;
        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
    });

    navigationElement.appendChild(ulElement);
};

SetNavigation(id="#navigation", navigator=menuLinks);
SetNavigation(id="#links", navigator=asideLinks, target="_blank");
