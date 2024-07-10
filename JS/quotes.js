const quotes = [
    {
        quote : "他の人と違う生き方というのは、それだけ難しいものだよ。失敗しても他人のせいにはできないからね。",
        author : "スタジオジブリ「耳をすませば」",
    },
    {
        quote : "近くにあるものは小さく、遠くにあるものは大きく見えるものさ。",
        author : "Euスタジオジブリ「耳をすませば」ripides",
    },
    {
        quote : "まだ磨かれていない自然のままの原石もそれ自体で美しいけれど、自分の中の原石を磨いて形を整えなければならない。とても努力が必要なことだよ。",
        author : "スタジオジブリ「耳をすませば」",
    },
    {
        quote : "君の人生の物語を素晴らしく書いてごらん。",
        author : "スタジオジブリ「耳をすませば」",
    },
    {
        quote : "恐れずに行こう。夕方の風に乗って、星まで手が届くように！",
        author : "スタジオジブリ「耳をすませば」",
    },
    {
        quote : "なぜ変わってしまったのだろう？私も以前は明るくて可愛らしい子だったのに、本を読んでも昔のようにときめかない。頭の中で誰かがいつも現実とは違うと言っている。",
        author : "スタジオジブリ「耳をすませば」",
    },
    {
        quote : "お疲れ様。君は素敵な子だよ。急ぐ必要はない。ゆっくりと磨いていこう。",
        author : "スタジオジブリ「耳をすませば」",
    }
]

const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]; 
//랜덤하게 얻은 숫자에 Array Lenght만큼 곱해서 floor()사용 : 내림

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;