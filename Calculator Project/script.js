let input = document.getElementById("inputBox")
let buttons = document.querySelectorAll('button')

let string = "";
let arr = Array.from(buttons);

function removeChar(str){
    let newString = str.slice(0,-1)
    return newString
}

arr.forEach(button => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string)
            input.value = string
        }
        else if(e.target.innerHTML == "^2"){
            string *= string
            input.value = string
        }
        else if(e.target.innerHTML == "AC"){
            string = ""
            input.value = string
        }
        else if(e.target.innerHTML == "DEL"){
            string = removeChar(string)
            input.value = string
        }
        else{
            string += e.target.innerHTML
            input.value = string
        }
        
    })
})