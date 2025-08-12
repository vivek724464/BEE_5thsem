async function getSum() {
    let num1=document.querySelector(".num1").value;
    let num2=document.querySelector(".num2").value;

    let response=await fetch("/getSum", {
        method:"POST",
        headers:{
             "Content-Type": "application/json"
        },
        body: JSON.stringify({ num1, num2 })
    });
    let data=await response.json();
    document.querySelector(".finalSum").textContent = "Sum: " + data.sum;

}

let button = document.querySelector(".btn");
button.addEventListener("click", () => {
    getSum();
});