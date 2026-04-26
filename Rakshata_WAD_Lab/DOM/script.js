let mybtn = document.getElementById("mybtn");
mybtn.onclick = function(){
    let Name =document.getElementById("mytext").value;
    document.getElementById("content").textContent =`HELLO ${Name}`;
}
