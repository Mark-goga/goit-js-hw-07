const formEl = document.querySelector(".login-form");

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formElement = event.currentTarget.elements;
    
    if (formElement.email.value.trim() === '' || formElement.password.value.trim() === '') {
        alert('All form fields must be filled in');
        return;
    }
    const info = {
        email: formElement.email.value.trim(),
        password: formElement.password.value.trim(),
    };

    event.currentTarget.reset();
    console.log(info);
})