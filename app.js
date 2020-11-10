            /*Guessing Game- FEATURES
Create an ALERT that allows player to continually be PROMPT to enter their guess
If guess is incorrect, display ALERT that informs player:
    -ALERT- Guess is too high
    -ALERT-Guess is too low
    -ALERT- Previous guessed numbers (w/o showing the square brackets of the array)
If player guess the correctly:
    -ALERT- Congratulations! You correctly guessed the right number after [#] of guesses */

/*          Instructions-

*/




const game = {
  //initialized state
    title: 'Guess the Number!',
    biggestNum: 10,
    smallestNum: 1,
    secretNum: null,
    prevGuesses : [],
    // yourGuess: [],
    
    
    play : function (){
      yourGuess= prompt ('ENTER GUESSES HERE. Make your selection between 1-10')
      this.secretNum = parseInt(Math.random() * (this.biggestNum- this.smallestNum + 1)) + this.smallestNum
    
      while (yourGuess !== this.secretNum){
        prevGuesses = this.prevGuesses.push(yourGuess) 
        this.render(yourGuess);
          if(yourGuess === this.secretNum)
        return 
      }
    }, 
    
    getPlayerGuess: function (){
            let yourGuess = ''
            while  (isNan (yourGuess) ||  yourGuess < this.smallestNum || yourGuess > this.biggestNum++) 
              return yourGuess
          },
         
    render: function(){
     let theMessage = (yourGuess === this.secretNum) ?
        (`Congratulation! Your guess of ${yourGuess} was the right! It took you ${this.prevGuesses.length} guesses`):

         `Whomp, whomp! Try again! Your guess of was too ${yourGuess > this.secretNum ? 'high' : 'low'} 
         
         Your previous guesses were ${this.prevGuesses.join(' , ')}`  
         
         prompt(theMessage) 
     }, 
      
    }
  
game.play()
    


  //function to structure the game
  //function to game
  //function to render

  //run in the browser

  //Not a number = NaN