function Guess_theNumber(guessedNumber)
{
    var randomnumber=Math.floor(Math.random()*100)+1;
    if(randomnumber==guessedNumber)
    {
        console.log("You have guessed the number correctly");
    }
    else
    {
        console.log("You have guessed the number incorrectly,Generated number is: "+randomnumber);
    }
}
Guess_theNumber(6);

