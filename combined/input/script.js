"use strict";

// vars
const inputField = document.getElementById("text");
const ulField = document.getElementById("suggestions");
let focused = false;

// listeners
inputField.addEventListener("input", debounce(changeAutoComplete, 300));
ulField.addEventListener("click", selectItem);
inputField.addEventListener("focus", () => (focused = true));
inputField.addEventListener("blur", () => (focused = false));

// functions
function changeAutoComplete({ target }) {
    const data = target.value;
    ulField.innerHTML = ``;
    if (data.length && focused) {
        ulField.classList.add("active");
        const autoCompleteValues = [data, data + data, data + data + data];
        autoCompleteValues.forEach(value => {
            addItem(value);
        });
    } else {
        ulField.classList.remove("active");
    }
}

function addItem(value) {
    const li = document.createElement("li");
    li.textContent = value;
    ulField.appendChild(li);
}

function selectItem({ target }) {
    if (target.tagName === "LI") {
        inputField.value = target.textContent;
        ulField.innerHTML = ``;
        ulField.classList.remove("active");
    }
}

// Debounce function
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}
