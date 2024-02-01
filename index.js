let counter = document.getElementById('counter');
let count = 0
let finished = document.getElementById('finished');
function Increment(){
    counter.innerHTML = count++
}

function Decrement(){
    counter.innerHTML = count--
    if(count <0[0]){
    finished.innerHTML = "Finished Boowe 😁😁"
    }
}