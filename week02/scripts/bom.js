const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

document.getElementById("add-chapter").addEventListener("click", function(event){
  event.preventDefault()
});

const addChapter = () => {
    if (input.value) {
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
    };
};

const deleteItem = (event) => {
    const parent = event.target.parentNode;
    parent.remove();
};
