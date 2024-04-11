const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output")
console.dir(spanEl);
inputEl.addEventListener('input', (even) => {
    const trimmedValue = inputEl.value.trim();
    if (trimmedValue === "") {
        spanEl.textContent = 'Anonymous';
    } else {
        spanEl.textContent = trimmedValue;
    }
});