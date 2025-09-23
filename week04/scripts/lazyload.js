const today = new Date();

const copyright = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

copyright.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `${document.lastModified}`;
