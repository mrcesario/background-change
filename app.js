
function randomHSL(){
    return "hsl(" + 360 * Math.random() + ',' +
    (25 + 70 * Math.random()) + '%,' + 
    (85 + 10 * Math.random()) + '%)'
  }

setInterval((function(){
    document.body.style.backgroundColor = randomHSL()
 }), 10000);



 var quotes = [
    "<h1>Hello World!</h1><br><p>Have a nice day!</p>",
    "<h1>The greatest glory in living lies not in never falling, but in rising every time we fall.</h1><br><p>Nelson Mandela</p>", 
    "<h1>The way to get started is to quit talking and begin doing.</h1><br><p>Walt Disney</p>",
    "<h1>Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.</h1><br><p>Steve Jobs</p>",
    "<h1>If life were predictable it would cease to be life, and be without flavor.</h1><br><p>Eleanor Roosevelt</p>",
    "<h1>If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.</h1><br><p>Oprah Winfrey</p>",
    "<h1>If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.</h1><br><p>James Cameron</p>",
    "<h1>Life is what happens when you're busy making other plans.</h1><br><p>John Lennon</p>"
]

setInterval((function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}), 10000);


var imagesRight = ["tree2.png", "tree3.png", "tree4.png", "empety.png", "empety.png", "empety.png", "empety.png", "longflower1.png", "bird2.png", "tree1.png", "flower1.png", "flower3.png", "flower5.png", "flower7.png", "flower9.png", "flower13.png"];

setInterval((function newBird() {
  var randomNumber = Math.floor(Math.random() * (imagesRight.length));
  document.getElementById('imageright').src = imagesRight[randomNumber];
}), 10000);


var imagesLeft = ["tree6.png", "tree7.png", "tree8.png", "tree9.png", "empety.png", "empety.png", "empety.png", "bird1.png", "tree5.png", "flower4.png", "flower8.png", "flower10.png", "flower12.png", "flower14.png", "flower15.png"];

setInterval((function images() {
  var randomNumber = Math.floor(Math.random() * (imagesLeft.length));
  document.getElementById('imageleft').src = imagesLeft[randomNumber];
}), 10000);