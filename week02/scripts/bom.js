const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const notification = document.querySelector("#notification");

button.addEventListener("click", event => {
  event.preventDefault()
});

input.addEventListener("input", (event) => {
    if (event.target.value.trim() !== "") {
        notification.innerHTML = "";
    }
});

const addChapter = () => {
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        const span = document.createElement("span");
        span.innerHTML = input.value;
        li.append(span);
        input.value = "";
        deleteButton.innerHTML = "X";
        deleteButton.onclick = deleteItem;
        li.append(deleteButton);
        list.append(li);
    } else {
        notification.innerHTML = "No chapter defined, please fill the field.";
    }
    input.focus();
};

const deleteItem = (event) => {
    const parent = event.target.parentNode;
    // console.log(parent.querySelector("span"));
    parent.remove();
    input.focus();
};
