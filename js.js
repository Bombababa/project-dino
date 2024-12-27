const dino = document.querySelector(".dino")
document.addEventListener("keydown", jump )
function jump(i) {
console.log(i.code)
if (i.code === "Space") {
    dino.classList.add("dinojump")
} else {
    
}
} 

