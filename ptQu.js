//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =[{
    quote:`"If you want to live a happy life , tie it to a goal, note to people or things."`,
    person:`Albert Einstein`
},{
    quote:`"Your time is limited, so don't , so don't waste it living someone else's life."`,
    person:`Steve Jobs`
},{
    quote:`“Life is never fair, and perhaps it is a good thing for most of us that it is not.”`,
    person:`Oscar Wilde`
},{
    quote:` "Anyone who has never made a mistake has never tried anything new."`,
    person:`Albert Einstein`
},{
    quote:` "I want to taste and glory in each day, and never be afraid to experience pain."`,
    person:`Sylvia Plath`
},{
    quote:`"Life is tough my darling, but so are you."`,
    person:`Stephanie Bennett Henry`
},{
    quote:`"Amateurs sit and wait for inspiration, the rest of us just get up and go to work."`,
    person:` Stephen King`
},
];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
