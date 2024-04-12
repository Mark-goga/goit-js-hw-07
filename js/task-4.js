const formEl = document.querySelector(".login-form");

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formElement = event.currentTarget.elements;
    
    if (formElement.email.value === '' || formElement.password.value === '') {
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