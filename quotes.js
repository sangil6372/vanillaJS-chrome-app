const quotes = [
    {
        quote: "Slow and Steady wins the race",
        author: "sang il",
    },
    {
        quote: "Slow and Steady wins the race",
        author: "sang il",
    },{
        quote: "Slow and Steady wins the race",
        author: "sang il",
    },{
        quote: "Slow and Steady wins the race",
        author: "sang il",
    },{
        quote: "Slow and Steady wins the race",
        author: "sang il",
    },{
        quote: "Slow and Steady wins the race",
        author: "sang il",
    },{
        quote: "Slow and Steady wins the race",
        author: "sang il",
    },{
        quote: "Slow and Steady wins the race",
        author: "sang il",
    },{
        quote: "Slow and Steady wins the race",
        author: "sang il",
    },{
        quote: "Slow and Steady wins the race",
        author: "sang il",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote; 
author.innerText = todaysQuote.author;

console.log(todaysQuote);


