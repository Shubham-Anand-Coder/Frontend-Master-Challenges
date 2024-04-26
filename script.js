

// let email_input = document.getElementById("email-input");
// email_input.addEventListener("input", (event) => {
//      console.log(event);
// })

// document.getElementById("myForm").addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log(new FormData(event.target));


//     const email = document.getElementById('email-input').value;
//     const password = document.getElementById('password-input').value;

//     const formData = {
//         email: email,
//         password: password
//     };

//     console.log('Form data:', formData);
// }) 


document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const responseData = {}

    for(items of formData) {
         responseData[items[0]] = items[1];
    }
    console.log(responseData);
});
