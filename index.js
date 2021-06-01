AOS.init();
const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const newQ = document.getElementById('newQ');
const twitter = document.getElementById('twitter');
const whatsapp = document.getElementById('whatsapp');
let realData = "";
let quotesData = "";
// above code for getting id and declaring global variable
// below code for tweet function start
const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}-${quotesData.author}`;
    window.open(tweetPost);

};
const msg = () => {
    let whatsappMsg = `whatsapp://send?text=${quotesData.text}-${quotesData.author}`;
    window.open(whatsappMsg);
}
// tweet function end

// below code for random quotes function start
const getNew = () => {
    let rand = Math.floor(Math.random() * 20);
    quotesData = realData[rand];
    // console.log(realData[rand].text);
    quotes.innerText = `${quotesData.text}`;
    author.innerText = `-By ${quotesData.author}`;
    if (quotesData.author == null) {
        return author.innerText = "-By unKnown";
    }
    else {
        return author.innerText = `-By ${quotesData.author}`
    }
};
//random quotes function end

// below code for getting api through function start
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNew();
        // console.log(realData[50].text);
        // console.log(realData[50].author);
    } catch (error) {

    }
}
//  getting api through function end

// listener
twitter.addEventListener('click', tweetNow);
whatsapp.addEventListener('click', msg);
newQ.addEventListener('click', getQuotes);
getQuotes();//calling api function
function myFunct() {
    const share = document.getElementById('share');
    share.style.display = "inline";
}
