const SetFooterInfo = () => {
  const copyright = document.querySelector("#currentYear");
  const lastModified = document.querySelector("#lastModified");

  const today = new Date();

  copyright.innerHTML = `${today.getFullYear()}`;
  lastModified.innerHTML = `${document.lastModified}`;
};

const LoadSubmittedFormData = () => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const productId = params.get('product');
  const stars = params.get('stars');
  const features = params.get('features');
  const installation_date = params.get('installation_date');
  const review = params.get('review');
  return {
    productId,
    stars,
    features,
    installation_date,
    review,
  };
};

const FindProduct = (productId) => {
  const product = localStorage.getItem(productId);
  return product;
};

const SaveRatingReview = (product) => {
  let productRating = FindProduct(product.productId);
  if (!productRating) {
    productRating = 1;
    localStorage.setItem(product.productId, productRating);
  } else {
    productRating = parseInt(productRating) + 1;
    localStorage.setItem(product.productId, productRating);
  }
  return productRating;
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

const DisplayProductInfo = (product, productRating) => {
  const reviewDetails = document.querySelector("#review-details");
  const productItem = document.createElement("p");
  const productElement = document.createElement("span");

  const productData = products.find(item => item.id === product.productId);
  console.log(product, productData);

  const ratingText = productRating > 1 ? "times" : "time";

  productElement.innerHTML = `The product <b>${productData.name}</b> has rating ${productRating} ${ratingText}.`;

  productItem.append(productElement);
  reviewDetails.append(productItem);
};

const ListenPageLoaded = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const productInfo = LoadSubmittedFormData();
    const productRating = SaveRatingReview(productInfo);
    DisplayProductInfo(productInfo, productRating);
  });
}

SetFooterInfo();
ListenPageLoaded();
