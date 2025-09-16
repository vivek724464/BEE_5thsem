// signup feature
const signupForm=document.querySelector("#signup-form");
let signupName=document.querySelector("#signup-name");
let signupEmail=document.querySelector("#signup-email");
let signupPassword=document.querySelector("#signup-password");

signupForm.addEventListener("submit",async (e)=>{
    e.preventDefault();

    let namevalue=signupName.value;
    let emailvalue=signupEmail.value;
    let passwordvalue=signupPassword.value 

    let response=await fetch("/users", {
        method:"POST",
        body:JSON.stringify({
            username:namevalue,
            email:emailvalue,
            password:passwordvalue
        }),
        headers:{
            "Content-Type":"application/json",
        }
    })
    let data=await response.json();
    if(data.success){
        alert("signup success, please continue to login"+" "+data.data.username);
    }
    signupForm.reset();
})

// login feature
const loginForm=document.querySelector("#login-form");
let loginEmail=document.querySelector("#login-email");
let loginPassword=document.querySelector("#login-password");

loginForm.addEventListener("submit", async(e)=>{
    e.preventDefault();
    let emailvalue=loginEmail.value;
    let passwordvalue=loginPassword.value;
    let res= await fetch("/userLogin",{
        method:"POST",
        body:JSON.stringify({
            email:emailvalue,
            password:passwordvalue
        }),
        headers:{"Content-Type":"application/json"}

    })
    let data=await res.json();
    console.log(data);
    if(data.success){
        let token=data.token;
        localStorage.setItem("token", token);
        alert("Login successfull");
    }
})
