let cardContainer = document.querySelector('.game');
let reset = document.querySelector('.reset');
const emojis = ["😍","❤","🐱‍🐉","🌹","🐱‍👤","🤣","😁","👍"];

const multiEmojis = emojis.concat(emojis);

// function shuffleEmojis(emojis) {
//   for (let i = 0; i < emojis.length; i++) {
//     let j = Math.floor(Math.random() * emojis.length);
//     let temp = emojis[i];
//     emojis[i] = emojis[j];
//     emojis[j] = temp;
//   }
//   return emojis;
// }

let shuffle_emoji = multiEmojis.sort(() => (Math.random() > .5)? 2 : -1);

for(let i = 0;i<multiEmojis.length;i++){
    let card = document.createElement('div');
    card.className = "cardItem";
    card.innerHTML = shuffle_emoji[i];
    

    card.onclick = function(){
        this.classList.add('box-open');
        // let document.querySelectorAll('.box-open') = document.querySelectorAll('.box-open');
        console.log(document.querySelectorAll('.box-open').length);
        setTimeout(function(){
            if(document.querySelectorAll('.box-open').length > 1){
                if(document.querySelectorAll('.box-open')[0].innerHTML == document.querySelectorAll('.box-open')[1].innerHTML){
                    document.querySelectorAll('.box-open')[0].classList.add('Boxmatched');
                    document.querySelectorAll('.box-open')[1].classList.add('Boxmatched');
                    
                    document.querySelectorAll('.box-open')[1].classList.remove('box-open');
                    document.querySelectorAll('.box-open')[0].classList.remove('box-open');
                    if(document.querySelectorAll('.Boxmatched').length == multiEmojis.length){
                        alert("congratulations");
                    }
                }else{
                    document.querySelectorAll('.box-open')[1].classList.remove('box-open');
                    document.querySelectorAll('.box-open')[0].classList.remove('box-open');
                }
            }
        },500)
    }
    cardContainer.appendChild(card);
}


