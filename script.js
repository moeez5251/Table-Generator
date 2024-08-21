let button = document.querySelector("button");
let inputs = document.querySelectorAll(".textInput");

button.addEventListener("click", () => {
    if (inputs[0].value.trim() === "" || inputs[1].value.trim() === "") {
        alert("Kindly Fill all required Values")
        return;
    }
    document.querySelector(".inputs").style.left = "-200%"
    document.querySelector(".btn").style.display = "none";

    let newelement = document.createElement("div");
    newelement.classList.add("table");
    document.body.appendChild(newelement);
  

    for (let i = 0; i <= inputs[1].value; i++) {
        setTimeout(() => {
            newelement.innerHTML += `<li>${inputs[0].value} x ${i} = ${inputs[0].value * i}</li>`
          window.scrollTo(0,newelement.scrollHeight);
        }, i * 400);
        setTimeout(() => {
         document.querySelector(".restart").style.display="block";
        }, inputs[1].value * 100);
    }
  
})
document.querySelector(".restart").addEventListener("click",()=>{
    let e=document.querySelector(".table");
    document.body.removeChild(e);
    document.querySelector(".inputs").style.left = "0%"
    document.querySelector(".btn").style.display = "block";
    document.querySelector(".restart").style.display="none";
    inputs[0].value="";
    inputs[1].value="";
})