var quotes = [{
  quote: "It\'s a dangerous business, Frodo, going out your door. You step onto the road, and if you don\'t keep your feet, there\'s no knowing where you might be swept off to.",
  author: "J.R.R. Tolkien, The Lord of the Rings",
  color: "#ff0000"
}, {
  quote: "It\'s the job that\'s never started as takes longest to finish.",
  author: "J.R.R. Tolkien, The Lord of the Rings",
  color: "#ff9900"
}, {
  quote: "Not all who wander are lost.",
  author: "J.R.R. Tolkien, The Lord of the Rings",
  color: "##ffcc66"
}, {
  quote: "The man who passes the sentence should swing the sword.",
  author: "Eddard Stark, Game of Thrones",
  color: "#33cc33"
}, {
  quote: "When you play the game of thrones, you win or you die.",
  author: "Cersei Lannister",
  color: "##3399ff"
}, {
  quote: "You know nothing Jon Snow.",
  author: "Ygritte",
  color: "#0033cc"
}, {
  quote: "A man needs books just like a sword needs a whetstone.",
  author: "Tyrion Lannister",
  color: "#33cc00"
}, {
  quote: "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
  author: "Jojen Reed",
  color: "#ff33cc"
}, {
  quote: "Let others determine your worth and your\'re already lost, because no one wants people worth more than themselves.",
  author: "Peter V. Brett, The Warded Man",
  color: "#00ffff"
}, {
  quote: "\"Choose a book,\" she said. \"Any book. Bring it here, and I\'ll show you what else the world can offer.\”",
  author: "Peter V. Brett, The Warded Man",
  color: "#00ff68"
}, {
  quote: "I am the palm and this is only wind. I will bend, but I will not break.",
  author: "Peter V. Brett, The Daylight War",
  color: "#00f46f"
}, {
  quote: "Fear and pain are only wind. Let it blow past you.",
  author: "Peter V. Brett, The Daylight War",
  color: "#ffa64d"
}, {
  quote: "There's a wide world out there, for those willing to brave the dark.",
  author: "Peter V. Brett, The Warded Man",
  color: "#ffa64d"
}];

function newQuote() {
  $("#new-quote").on('click', function() {
    var randomNum = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomNum].quote;
    var randomAuthor = quotes[randomNum].author;
    var randomColor = quotes[randomNum].color;

    $(".quote-text").text(randomQuote);
    $(".quote-author").text(randomAuthor);
    $(".text").css("color", randomColor);
    $(".background").css("background-color", randomColor);
    $("html").css("background-color", randomColor);
    $(".tweet").attr("href", "https://twitter.com/intent/tweet?text=" + randomQuote + " - " + randomAuthor);
    $(".post-tumblr").attr("href", "https://www.tumblr.com/widgets/share/tool?text=" + randomQuote + " - " + randomAuthor);
  });
}

$(document).ready(function() {
  newQuote();
  $('#new-quote').on('click', getQuote());
});