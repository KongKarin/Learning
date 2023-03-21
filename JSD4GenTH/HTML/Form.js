// const getValue = () => {
//     let firstName = document.getElementById("fname").value;
//     let lastName = document.getElementById("lname").value;
//     let password = document.getElementById("password").value;
//     let emailAddress = document.getElementById("email").value;

//     if (!firstName) {
//         console.log("add your first name");
//     }

//     if (!lastName) {
//         console.log("add your first name");
//     }

//     !emailAddress
//         ? console.log("add your email")
//         : emailAddress.includes("@")
//         ? console.log("add @ in your email")
//         : null;

//     if (password) {
//         if (password.length < 8) {
//             console.log("minimum password length is 8 characters"); 
//         }
//     }else {
//         console.log("add your password")
//     }   
// };





// P'Lak Code

// get HTML element
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const password = document.getElementById("password");
const emailAddress = document.getElementById("email");
const errorEl = document.getElementById("error");
const form = document.getElementById("form");

const validation = (event) => {
  // store error messages
  let errorMsg = [];

  if (!firstName.value) {
    errorMsg.push("Firstname is required");
  }

  if (!lastName.value) {
    errorMsg.push("Lastname is required");
  }

  if (emailAddress.value) {
    if (!emailAddress.value.includes("@")) {
      errorMsg.push("Incorrect Email Format");
    }
  } else {
    errorMsg.push("Email is required");
  }

  if (password.value) {
    if (password.value.length < 8) {
      errorMsg.push("Password is too short");
    }
  } else {
    errorMsg.push("Password is required");
  }

  if (errorMsg.length > 0) {
    event.preventDefault();
    errorEl.innerHTML = errorMsg.join(",");
  }
  console.log(errorMsg);
};

form.addEventListener("submit", validation);

// Alternative Method -- need to bind function with onsubmit event in form input
// const getValue = () => {
//   event.preventDefault();
//   let firstName = document.getElementById("fname").value;
//   let lastName = document.getElementById("lname").value;
//   let password = document.getElementById("password").value;
//   let emailAddress = document.getElementById("email").value;

//   //   error text
//   let temp = "";

//   //   if (!firstName) {
//   //     temp += "please put your firstname. ";
//   //   }

//   //   if (!lastName) {
//   //     temp += "please put your lastname. ";
//   //   }

//   if (!firstName || !lastName) {
//     temp += "please put your name. ";
//   }

//   !emailAddress
//     ? (temp += "please put your email address. ")
//     : !emailAddress.includes("@")
//     ? (temp += "please put email in right format. ")
//     : null;

//   if (password) {
//     if (password.length < 8) {
//       temp += "minimum password is 8 charecters required. ";
//     }
//   } else {
//     temp += "please put your password. ";
//   }

//   //   let paragraph = document.createElement("p");
//   //   paragraph.innerHTML = temp;
//   document.getElementById("error").innerText = temp;
// };


