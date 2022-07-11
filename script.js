const input = document.querySelectorAll(".sbox-input");
const icon = document.querySelectorAll(".sbox-icon");
const icnuser = document.querySelector(".username-icon")
const icnpass = document.querySelector(".password-icon")
const lbluser = document.querySelector(".username-label")
const lblpass = document.querySelector(".password-label")

console.log(input)


const addCl = (event) => {
    event.target.classList.add("focus")
    const obj = Object.values(event.target.classList)    

    if(obj.includes("username-input")){ 
        icnuser.classList.add("focus")
        lbluser.classList.add("focus")
    }    
    else if (obj.includes("password-input")){
        icnpass.classList.add("focus")
        lblpass.classList.add("focus")
    }
    
}
const removeCl = (event) => {
    const {value} = event.target
    if (value===''){
        event.target.classList.remove("focus")
        const obj = Object.values(event.target.classList)    

        if(obj.includes("username-input")){ 
            icnuser.classList.remove("focus")
            lbluser.classList.remove("focus")
        }    
        else if (obj.includes("password-input")){
            icnpass.classList.remove("focus")
            lblpass.classList.remove("focus")
        }  
    }
}

input.forEach(box=>{
    box.addEventListener("focus",addCl);
    box.addEventListener("blur",removeCl);
})


