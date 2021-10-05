const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const changer = document.getElementById("new_quotes");
const tweet = document.getElementById("tweet");

let realdata = "";

const tweet_func = () => {
  tweet_url =`https://twitter.com/intent/tweet?text=${realdata[ran_num].text}`
  window.open(tweet_url)
};
const changer_func = () => {
  ran_num = Math.floor(Math.random() *1643);
  rt = realdata[ran_num].text;
  
  let ra = realdata[ran_num].author;
  if (ra == null){
    ra = "unknown";
  }
  else{
    ra = ra;
  }
  //console.log(ra)
  quotes.innerText = rt;
  author.innerText = ra;
};
const getquotes = async () => {
  try {
  let url = "https://type.fit/api/quotes/";
  const data = await fetch(url);
  realdata = await data.json();
  //console.log(realdata)
  changer_func();
  } catch (e) {
 //   console.log(e);
  }
};

changer.addEventListener("click", changer_func)
tweet.addEventListener("click", tweet_func)

getquotes();
