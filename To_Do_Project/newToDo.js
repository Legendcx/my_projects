const text = document.querySelector(".text");
const btn = document.querySelector(".btn");
const results = document.querySelector(".results");

// ! bu imleci inputtan başlamas için yazıldı.
window.onload = () => text.focus();



btn.addEventListener("click", () => {
    if(!text.value){
        alert("enter to do list !!!")
    }else{
        results.innerHTML += `<div class="result"><i class="fa-regular fa-square"></i><p>${text.value}</p><i class="fa-sharp fa-solid fa-trash-can"></i></div>`;
        text.value= "";
    }
})
// ! enter tuşunun click işlevi görmesi için yapıldı.
text.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        btn.click();
    }
})

results.addEventListener("click", (e) => {
    if(e.target.classList.contains("fa-trash-can")){
        e.target.parentElement.remove();

    }else if(e.target.classList.contains('fa-square')){
        e.target.parentElement.classList.add("bg")
      e.target.classList.remove("fa-regular","fa-square");
       e.target.classList.add("fa-solid" ,"fa-check");
    }
    else if (e.target.classList.contains("fa-check")) {
         e.target.parentElement.classList.remove("bg");
      e.target.classList.add("fa-regular", "fa-square");
      e.target.classList.remove("fa-solid", "fa-check");
    }
})


// const yeniValue = () => {
//     const li =  document.createElement("li");
//     li.classList.add("list");
//     li.innerHTML = `<a href="#">${input.value}</a><i class="fa-solid fa-trash"></i>`;
//     ulElement.li.appendChild(li);

//     const silmeAraci = document.querySelectorAll(".fa-trash");
//     silmeAraci.forEach((x) => {
//         x.addEventListener("click", () => {
//             x.parentElement.classList.add("d-none");
//         });
//     });
// };

// const yapLi= () => {
//     const inputum = document.getElementById("input");

//     if(inputum.value){
//         yeniValue()
//     }
//     input.value="";
// };

// addBtn.addEventListener("click", yapLi);

// inputum.addEventListener("keyup", (e)=>{
//     if(e.code==="Enter"){
//         addBtn.click()
//     }
// });

// const lastElement = allCaught.lastElementChild;

// addBtn.addEventListener("click", ()  => {
//        lastElement.innerHTML += `<span><i class="fa-solid fa-check"></i></span><li id="list-id" class="list">${input.value.toUpperCase()}</li><span><i class="fa-solid fa-trash"></i></span><br>`;
//        iconCheck.style.color = "white";

//     input.value = "";
    
// })

// input.addEventListener("keydown", (tus) => {
//     if(tus.code == "Enter"){
//         lastElement.innerHTML += `<span><i class="fa-solid fa-check"></i></span><li id="list-id" class="list">${input.value.toUpperCase()}</li><span><i class="fa-solid fa-trash"></i></span><br>
//         `;
//     console.log(input.value);

//     input.value = "";
//     }
// })

// iconCheck.addEventListener("click", () => {
   
// })
// const newUl = document.querySelector("ul");
    // newUl.innerHTML += `<li id="list-id" class="list">Merhaba</li>`;




