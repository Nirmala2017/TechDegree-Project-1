// An array of objects to hold  quotes.

const quotes = [
    {quote:'People say nothing is impossible but I do nothing every day', 
     source: 'A.A.Milne',
    citation: '',
     year:''},

    {quote :'Light travels faster than sound. This is why some people appear bright until you hear them speak', 
     source:  'Alan Dundes',
     citation: '',
     year:'1987'},

    {quote: 'Men marry women with the hope they will never change. Women marry men with the hope they will change. Invariably they are both disappointed', 
     source: 'Albert Einstein',
     citation: 'Google',
     year:''},

    {quote:'The difference between stupidity and genius is that genius has its limits', 
     source: 'Albert Einstein',
     citation: '',
     year:''},

    {quote: 'It would be nice to spend billions on schools and roads, but right now that money is desperately needed for political ads', 
    source: 'Andy Borowitz',
     citation: '',
      year: ''}
    ];

    // This a function to get a random quote 

    function getRandomQuote (){

        let randomQuote = Math.floor(Math.random()*(quotes.length));
        console.log(quotes[randomQuote]);
        return quotes[randomQuote];
        
    }

    // This a function to print quote 

    function printQuote(){
     // This varaible holds the result of getRandomQuote function
        let getQuote = getRandomQuote(); 

                
       // Conditional statement to display object properties   
       if (getQuote.citation ){
        let resultRandomQuote = 
        `<p class="quote">${getQuote.quote}</p>  
           <p class="source">${getQuote.source}        
              <span class="citation">${getQuote.citation}</span>
              </p>`
     }
      if (getQuote.year ){
        resultRandomQuote = 
        `<p class="quote">${getQuote.quote}</p>  
           <p class="source">${getQuote.source}        
              <span class="year">${getQuote.year}</span>
              </p>`
     }
     
     document.getElementById('quote-box').innerHTML = resultRandomQuote;
     
     return document.getElementById('quote-box').innerHTML = resultRandomQuote;
    }
 

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

