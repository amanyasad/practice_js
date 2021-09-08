 
 var quote = document.getElementById("quote");


 var qoutes =[` “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” <br>
 ― Marilyn Monroe `, `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <br>
 ― Albert Einstein `, `“So many books, so little time.” <br>
 ― Frank Zappa `, `“A room without books is like a body without a soul.” <br>
 ― Marcus Tullius Cicero`,` “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” <br>
 ― Bernard M. Baruch `, ` “You've gotta dance like there's nobody watching, <br>
 Love like you'll never be hurt,<br>
 Sing like there's nobody listening, <br>
 And live like it's heaven on earth.”<br>
 ― William W. Purkey `, `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” <br>
 ― Dr. Seuss`, ` “You only live once, but if you do it right, once is enough.” <br>
 ― Mae West `, ` “Be the change that you wish to see in the world.” <br>
 ― Mahatma Gandhi `, ` “In three words I can sum up everything I've learned about life: it goes on.” <br>
 ― Robert Frost `

]

 function newQuote(){
     var x = Math.floor(Math.random() * qoutes.length );

     
     console.log(x);

    quote.innerHTML = qoutes[x];
 }






 

 