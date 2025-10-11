const getTeamDrivers = (arrayList, teamId) => {
  return arrayList.drivers.filter(driver => driver.teamId === teamId);
};

const UpdateSeason = (cars) => {
  const seasonElement = document.querySelector("#season-list");
  const ulElement = document.createElement("ul");
  cars.forEach(car => {
    const card = document.createElement("li");
    const cardHeader = document.createElement("div");
    const headerDescription = document.createElement("div");
    const cardImage = document.createElement("div");
    const h3 = document.createElement("h3");
    const carDetails = document.createElement("div");
    const model = document.createElement("p");
    const engine = document.createElement("p");
    const driverDetails = document.createElement("div");
    const image = document.createElement("img");

    card.classList.add("season-item");
    cardHeader.classList.add("season-header");
    headerDescription.classList.add("header-description");
    cardImage.classList.add("season-image");
    carDetails.classList.add("car-details");
    driverDetails.classList.add("drivers-details");

    h3.innerHTML = car.team_name;
    model.innerHTML = `<span class="label">Model</span>: ${car.model}`;
    engine.innerHTML = `<span class="label">Engine</span>: ${car.engine}`;

    // Set the normal image src
    image.setAttribute("src", car.image);

    // Generate the large image path by inserting '-large' before the extension
    const imageParts = car.image.split('.');
    if (imageParts.length > 1) {
      const ext = imageParts.pop();
      const largeImage = `${imageParts.join('.')}-large.${ext}`;
      image.setAttribute("srcset", `${car.image} 480w, ${largeImage} 1024w`);
      image.setAttribute("sizes", "(max-width: 600px) 720px, 1024px");
    }
    image.setAttribute("alt", `${car.name} of ${car.team_name}`);
    image.setAttribute("loading", "lazy");

    car.drivers.forEach(driver => {
      const driverInfo = document.createElement("div");
      const driverName = document.createElement("p");
      const driverNationality = document.createElement("p");

      driverInfo.classList.add("drivers-info");

      driverName.innerHTML = driver.name;
      driverNationality.innerHTML = `Nationality: ${driver.nationality}`;
      driverInfo.appendChild(driverName);
      driverInfo.appendChild(driverNationality);
      driverDetails.appendChild(driverInfo);
    });

    carDetails.appendChild(model);
    carDetails.appendChild(engine);

    cardHeader.appendChild(h3);
    headerDescription.appendChild(carDetails);
    headerDescription.appendChild(driverDetails);
    cardHeader.appendChild(headerDescription);

    cardImage.appendChild(image);

    card.appendChild(cardHeader);
    card.appendChild(cardImage);
    ulElement.appendChild(card);
    seasonElement.appendChild(ulElement);
  });
};

const fetchData = () => {
  fetch("data.json")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const teams = data.teams;
      const drivers = data.drivers;
      const cars = data.cars.map(car => {
        const team = teams.find(team => team.id === car.teamId);
        car.team_name = team ? team.name : "Unknown";
        const driverItems = [];
        drivers.forEach(driver => {
          if (car.teamId === driver.teamId) {
            driverItems.push(driver);
          }
        });
        car.drivers = driverItems;
        return car;
      });

      UpdateSeason(cars);
    })
    .catch(error => {
      console.error('Error fetching or parsing JSON:', error);
    });
};

fetchData();
