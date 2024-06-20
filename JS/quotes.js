const quotes = [
    {
        quote : "Learning without thought is labor lost; thought without learning is perilous.",
        author : "Confucius",
    },
    {
        quote : "When love is in excess it brings a man no honor nor worthiness.",
        author : "Euripides",
    },
    {
        quote : "The better part of valor is discretion, in which the better part I have saved my life.",
        author : "William Shakespeare",
    },
    {
        quote : "Gravitation cannot be held responsible for people falling in love.",
        author : "Albert Einstein",
    },
    {
        quote : "Determine never to be idle...It is wonderful how much may be done if we are always doing.",
        author : "Thomas Jefferson",
    },
    {
        quote : "Study the past if you would define the future.",
        author : "Confucius",
    },
    {
        quote : "You have to have confidence in your ability, and then be tough enough to follow through.",
        author : "Rosalynn Carter",
    },
    {
        quote : "With regard to excellence, it is not enough to know, but we must try to have and use it.",
        author : "Aristoteles",
    },
    {
        quote : "This bud of love, by summer's ripening breath, May prove a beauteous flower when next we meet.",
        author : "William Shakespeare",
    },
    {
        quote : "People find life entirely too time-consuming.",
        author : "Stanislaw J. Lec",
    }
]

const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]; 
//랜덤하게 얻은 숫자에 Array Lenght만큼 곱해서 floor()사용 : 내림

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;