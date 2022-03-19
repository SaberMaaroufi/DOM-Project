let plus = document.querySelectorAll(".plus");
// console.log(plus);
let minus = document.querySelectorAll(".minus");
// console.log(minus);
let deletebtn = document.querySelectorAll(".deletebtn")
    // console.log(deletebtn);
let like = document.querySelectorAll(".like")
    // console.log(like);
let price = document.querySelectorAll(".price")
let tot = document.querySelectorAll(".tot")
    // console.log(sum);

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function() {
        plus[i].nextElementSibling.innerHTML++;
        total()
    })
}

for (let i = 0; i < minus.length; i++) {

    minus[i].addEventListener("click", function() {
        if (minus[i].previousElementSibling.innerHTML > 0) {
            minus[i].previousElementSibling.innerHTML--;
            total()
        }
    })
}


//Delete btn
for (let i = 0; i < deletebtn.length; i++) {
    deletebtn[i].addEventListener("click", function() {
        deletebtn[i].parentElement.parentElement.remove();
        total()
    });
}


// sum
function total (){
    
    let unitprice=document.getElementsByClassName('price')
    let quaty=document.getElementsByClassName('span0')
    let tot=document.querySelector('.sum')
        let sum=0;
    for (let i=0; i<quaty.length; i++){
    sum+=quaty[i].innerHTML*unitprice[i].innerHTML
    }
    
    tot.innerHTML=sum
    }  

// // Like btn

// for (let i = 0; i < like.length; i++) {
//     like[i].addEventListener("click", function() {
//         onclick="document.getElementById('.like').style.color = 'red'">
//     });
// }
// for (let i = 0; i < deletebtn.length; i++) {
//     like[i].addEventListener("click", function myFunction(x) {
//     x.classList.toggle("fa-thumbs-down");
//   }