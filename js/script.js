// An array of objects to hold  quotes.

const quotes = [
    {Quote:'People say nothing is impossible but I do not every day', 
     source: 'A.A.Milne',
    citation: '',
     year:''},

    {Quote :'Light travels faster than sound. This is why some people appear bright until you hear them speak', 
     source:  'Alan Dundes',
     citation: '',
     year:'1987'},

    {Quote: 'Men marry women with the hope they will never change. Women marry men with the hope they will change. Invariably they are both disappointed', 
     source: 'Albert Einstein',
     citation: 'Google',
     year:''},

    {Quote:'The difference between stupidity and genius is that genius has its limits', 
     source: 'Albert Einstein',
     citation: 'Google',
     year:''},

    {Quote: 'It would be nice to spend billions on schools and roads, but right now that money is desperately needed for political ads', 
    source: 'Andy Borowitz',
     citation: 'Google',
      year: '2000'}
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

                // string to hold quote object properties
        let resultRandomQuote = 
     '<p class="quote">${getQuote.Quote}</p><p class="source">${getQuote.source}</p>';
          
          // conditional statement to print object properties if available like citation and year

     if(getQuote.citation ){

        resultRandomQuote +=
               <span class="year">$ {getQuote.year} </span>;

           
     }
      if (getQuote.citation){
        resultRandomQuote +=
        <span class="citation">$ {getQuote.citation} </span>;
     }

     document.getElementById('quote-box').innerHTML = resultRandomQuote;
     
     return document.getElementById('quote-box').innerHTML = resultRandomQuote;
    }


    

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

