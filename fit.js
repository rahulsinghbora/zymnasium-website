let card = document.querySelectorAll(".slider");
let challenge = document.querySelectorAll(".card");
let connect = document.getElementById("connect");

let count = 0;

card.forEach(function(cards, index){
    cards.style.left=`${index*100}%`
})

function myFun(){
    card.forEach(function(curVal){
        curVal.style.transform=`translateX(-${100 * count}%)`
    })
}

setInterval(function(){
    count++;
    if(count == card.length){
        count=0
    }
    myFun()
}, 2000)


// card Detail
challenge.forEach(function(detail){
    detail.addEventListener("click", function(){
        document.querySelector(".container").innerHTML="";

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <h2>Challenges</h2>
        <p>12 Weeks</p>
        <img src=${detail.firstElementChild.src} alt="">
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae autem rem nisi, maiores quod quisquam quo reiciendis repellendus rerum aliquam atque temporibus.</p>
        <button>Join</button>
        <a href="">Back</a>

        `
        document.querySelector("body").appendChild(div)
                
    })
})



 function data(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(name.value == "" || email.value == ""|| pass.value == ""){
        alert("Please Enter Details")
        return false
    }
    else{
        alert("THANKS FOR CONNECTING")
        true
    }

}