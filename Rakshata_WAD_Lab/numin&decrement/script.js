let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let counterlabel = document.getElementById("counterlabel");
let count = 0;
increment.onclick= function(){
    count++;
    counterlabel.textContent=count;
}
decrement.onclick= function(){
    count--;
    counterlabel.textContent=count;
}


