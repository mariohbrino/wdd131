const copyright = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

copyright.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `${document.lastModified}`;
