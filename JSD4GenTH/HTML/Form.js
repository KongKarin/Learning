const getValue = () => {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;

    if (!firstName) {

    }
}

if (password) {
    console.log("No password);
}


// P'Lak Code

form.addEventListener("submit, (e) => {
    let message = [];
    if(fnam.value === '' || fname.value === null){
        message.push('Name is required')
    }

    if(message.length > 0){
    e.preventDefault();
    errorElement.innerHTML = message.join(',');
    }
    console.log(fname);
}