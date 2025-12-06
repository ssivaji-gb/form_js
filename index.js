let userName = document.querySelector(".userName");
let Email = document.querySelector(".Email");
let PassWord = document.querySelector(".PassWord");
let Retype = document.querySelector(".Retype");
let formGrp = document.querySelectorAll(".formGrp");
let form = document.querySelector("form");

form.addEventListener("submit", butTon);

function butTon() {
  let inputs = document.querySelectorAll("input");

  inputs.forEach((element) => {
    let parent = element.parentElement;
    console.log(parent);
    if (element.value === "") {
      parent.classList.add("required");
       parent.classList.remove("success")
    } else if (element.value !== "") {
      parent.classList.remove("required");
      parent.classList.add("success");
    }
     let email=document.querySelector(".Email")

     if(email.value.includes("@")&&email.value.includes(".")){
        email.parentElement.classList.add("success")
     }else if(!email.value.includes("@")&&!email.value.includes(".")&&email.value!=="") {
        email.parentElement.classList.remove("success")
        email.parentElement.classList.add("required")
        email.parentElement.lastElementChild.innerHTML="Enter the Email Properly using @ and . "
     }
     if(Retype.value !==""){
 if(Retype.value !== PassWord.value){
      Retype.parentElement.classList.remove("success")
      Retype.parentElement.classList.add("required")
       let msg = Retype.parentElement.querySelector("p");
    msg.innerHTML = "Password do not match";
   
     }else{
         Retype.parentElement.classList.add("success")
      Retype.parentElement.classList.remove("required")
     }
     
     }
    

  });


}
