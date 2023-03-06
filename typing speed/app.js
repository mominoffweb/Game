let input = document.querySelector(".input")
const hardtime = document.querySelector(".hard")
const easytime = document.querySelector(".easy")
let time =  10 
let Qiyin = 5 
let score = 0
 let  random 
 function randomFunc() {
    random = Math.trunc(Math.random() * words.length)
    document.querySelector(".words").textContent = words[random]

 }



 randomFunc()
 
 setInterval(() => {
    if(time > 1){
        time--
        document.querySelector(".time > span").textContent = time
    } else {
        input.setAttribute("disabled",true)
        document.querySelector(".time > span").textContent = 0 
    }
 }, 1000)

  input.addEventListener("input", ()=>{
    if(input.value === words[random]){
        time =  time + 7
    }
  })
    
//      setInterval ( ()=>{
//     if(Qiyin > 1) {
//          Qiyin--
//         document.querySelector(".time > span").textContent = Qiyin
//     }  else {
//         Qiyin.setAttribute("disabled",true)
//         document.querySelector(".time > span").textContent = 0
//     }


//     input.addEventListener("input", ()=>{
//         if(input.value === words[random]){
//             Qiyin = Qiyin + 5
//         }
//       })

// })






 input.addEventListener("input", ()=> {
    if(input.value === words[random]) {
        score++
        randomFunc()
        input.value = ""
        document.querySelector(".score > span").textContent = score
    } else if(input.value.length == words[random].length && input.value !== words [random]) {
        input.style.borderColor = "red"
        input.setAttribute("placeholder",)
        input.value = ""
    }
 })


