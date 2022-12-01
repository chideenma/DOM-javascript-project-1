// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelectorAll('.quote');
console.log( quote);

let person = document.querySelector('.person');

const quotes = [{
    quote: '"The best way to find yourself is to lose yourself in the service of others."',
    person: 'Mahatma Gandhi'
}, {
    quote: '"If you want to live a happy life, tie it to a goal, not to people or things."',
    person: 'Albert Einstein' 
}, {
    quote: '"Your time is limited, so dont waste it living somone else life."', 
    person: "Steve Jobs"
}, {
    quote: '"Remember that not getting what you want is sometimes a wonderful stroke of luck."',
    person: 'Dalai Lama'
}, {
    quote: '"The journey of a thousand miles begins with one step."',
    person: 'Lao Tzu'

}, ];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.forEach(function(node, index){
    node.textContent = quotes[random].quote

    })
    //quote[0].innerText = quotes[random].quote;
    //quote[1].innerText = quotes[random].quote;
    person.innerText = quotes[random].person;





    //for (let i = 1; i <= quote.length; i++) {

    //quote[i-0].innerText = quotes[random].quote;
    //quote[i-1].innerText = quotes[random].quote;
    //person.innerText = quotes[random].person;

     //}
    

    // random.forEach( ele => {
    //     quote.innerText = quotes[random].quote;
    //     person.innerText = quotes[random].person;
    // })
})