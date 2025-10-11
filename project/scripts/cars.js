const getTeamDrivers = (arrayList, teamId) => {
  return arrayList.drivers.filter(driver => driver.teamId === teamId);
};

const getTeamCar = (arrayList, teamId) => {
  return arrayList.cars.find(car => car.teamId === teamId);
};

const getDriverTeam = (arrayList, driverId) => {
  const driver = arrayList.drivers.find(d => d.id === driverId);
  return arrayList.teams.find(team => team.id === driver.teamId);
};

const filterData = (originalData, searchTerm) => {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return originalData.filter(item =>
    item.name.toLowerCase().includes(lowerCaseSearchTerm) ||
    item.city.toLowerCase().includes(lowerCaseSearchTerm)
  );
};

const updateTable = (headerId, bodyId, arrayList, keys = [], orderBy = []) => {
  const tableHeader = document.getElementById(headerId);
  const tableBody = document.getElementById(bodyId);
  
  tableHeader.innerHTML = ""; // Clear existing headers
  tableBody.innerHTML = ""; // Clear existing content

  if (arrayList.length === 0) return;

  // If keys not provided, use keys from the first item
  const displayKeys = keys.length > 0 ? keys : Object.keys(arrayList[0]);

  // Sort arrayList by orderBy fields if provided
  if (orderBy.length > 0) {
    arrayList = [...arrayList].sort((a, b) => {
      for (let field of orderBy) {
        if (a[field] < b[field]) return -1;
        if (a[field] > b[field]) return 1;
      }
      return 0;
    });
  }

  // Build table headers dynamically
  const headerRow = tableHeader.insertRow();
  displayKeys.forEach(key => {
    const th = document.createElement("th");
    // Convert camelCase or snake_case to Title Case
    const title = key
      .replace(/([A-Z])/g, " $1")         // camelCase: add space before capitals
      .replace(/_/g, " ")                 // snake_case: replace underscores with spaces
      .replace(/\s+/g, " ")               // collapse multiple spaces
      .trim()
      .replace(/\b\w/g, c => c.toUpperCase()); // capitalize first letter of each word
    th.textContent = title;
    headerRow.appendChild(th);
  });

  // Build table body rows
  arrayList.forEach(item => {
    const row = tableBody.insertRow();
    row.setAttribute("data-id", item.id);
    displayKeys.forEach(key => {
      const cell = row.insertCell();
      cell.textContent = item[key];
    });
  });
};

// document.getElementById("searchForm").addEventListener("submit", (event) => {
//   event.preventDefault();
// });

// document.getElementById("searchInput").addEventListener("input", (event) => {
//   const searchTerm = event.target.value;
//   const filteredResults = filterData(searchTerm);
//   updateTable(filteredResults);
// });

const fetchData = () => {
  fetch("/project/data.json")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const teams = data.teams;
      const cars = data.cars.map(car => {
        const team = teams.find(team => team.id === car.teamId);
        car.team_name = team ? team.name : "Unknown";
        return car;
      });

      updateTable(
        headerId="carsTableHeader",
        bodyId="carsTableBody",
        arrayList=cars,
        keys=["team_name", "model", "engine"],
        orderBy=["team"]
      );
    })
    .catch(error => {
      console.error('Error fetching or parsing JSON:', error);
    });
};

fetchData();
