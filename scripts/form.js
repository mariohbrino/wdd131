const SetFooterInfo = () => {
  const copyright = document.querySelector("#currentYear");
  const lastModified = document.querySelector("#lastModified");

  const today = new Date();

  copyright.innerHTML = `${today.getFullYear()}`;
  lastModified.innerHTML = `${document.lastModified}`;
};

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const SetProductOptions = () => {
  const productElement = document.querySelector("#product");
  products.forEach(product => {
    const newOption = new Option(product.name, product.id)
    productElement.add(newOption);
  });
};

SetFooterInfo();
SetProductOptions();
