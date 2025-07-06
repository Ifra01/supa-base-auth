const projectURL = "https://cfilovfxhenrkivwkhsd.supabase.co";
const projectKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmaWxvdmZ4aGVucmtpdndraHNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Mzg2ODcsImV4cCI6MjA2NzAxNDY4N30.3l_3TBCbSDHZkEGkZCE7UVEfh-YXoNk69_KGn4TpbM8";

const { createClient } = supabase;
const client = createClient(projectURL, projectKey);

console.log(createClient);
console.log(client);

// AUTHENTICATION
// const signupBtn = document.getElementById("signup-btn");

// signupBtn.addEventListener("click", () => {
// const signupEmail = document.getElementById("signup-email").value;
// const signupPass = document.getElementById("signup-pass").value;
// console.log(signupEmail);
// console.log(signupPass);



//     async function signupUser() {
//         const { data, error } = await client.auth.signUp(
//             {
//                 email: signupEmail,
//                 password: signupPass
//             }
//         )
//         if(error){
//             console.log(error);  
//         }
//         else{
//             console.log(data);
//         }
//     }
//     signupUser();
// })


// VERIFICATION
// const signupBtn = document.getElementById("signup-btn");

// signupBtn.addEventListener("click", () => {
//     const signupEmail = document.getElementById("signup-email").value;
//     const signupPass = document.getElementById("signup-pass").value;

//     if (signupEmail && signupPass) {

//         async function signupUser() {
//             const { data, error } = await client.auth.signUp(){
//                 email: signupEmail,
//                 password: signupPass
//             }
//         }
//         if(data){
//             console.log(data); 
//         }
//         else{
//             console.log(error); 
//         }

//         signupUser()

//     }


// })


const signupBtn = document.getElementById("signup-btn");
signupBtn && signupBtn.addEventListener("click", function () {
    const signupEmail = document.getElementById("signup-email");
    const signupPass = document.getElementById("signup-pass");


    if (signupEmail && signupPass) {
        console.log(signupEmail, signupPass)

        async function signupUser() {
            try {
                const loader = document.getElementById("loader");
                loader.style.display = "block";
                const { data, error } = await client.auth.signUp({
                    email: signupEmail.value,
                    password: signupPass.value,
                })
                loader.style.display = "none";
                console.log(data);
                console.log(error);

                // navigating to login page

                window.location.href = "login.html";
            }
            catch (error) {
                console.log(error.message)

                switch (error.message) {
                    case "Unable to validate email address: invalid format":
                        alert("please give us the right format of email address");
                        break;
                }

            }

        }
        signupUser()

    }

    else {
        alert("please fill fields");
    }

})



const loginBtn = document.getElementById("login-btn");
loginBtn && loginBtn.addEventListener("click", function () {
    const loginEmail = document.getElementById("login-email")
    const loginPass = document.getElementById("login-pass")


    if (loginEmail && loginPass) {
        console.log(loginEmail, loginPass)

        async function loginUser() {
            try {
                const loader = document.getElementById("loader")
                loader.style.display = "block"
                const { data, error } = await client.auth.signInWithPassword({
                    email: loginEmail.value,
                    password: loginPass.value,
                })
                loader.style.display = "none"
                if (error) {
                    console.log(error.message)
                }
                else {
                    console.log(data)
                    alert("user created successsfully")
                }
                // navigating to login page
                window.location.href = "home.html"
            }
            catch (error) {
                console.log(error)
                console.log(error.message)

                switch (error.message) {
                    case "Unable to validate email address: invalid format":
                        alert("please give us the right format of email address");
                        break;
                }

            }

        }
        loginUser()

    }

    else {
        alert("please fill fields")
    }

})