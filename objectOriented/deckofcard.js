/**********************************************************************************************
*Execution : 1. default node cmd> node DeckofCards.js
* Purpose:Write a Program DeckOfCards.java , to initialize deck of cards having suit ("Clubs",
          "Diamonds", "Hearts", "Spades") & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10",
           "Jack", "Queen", "King", "Ace"). Shuffle the cards using Random method.  
* @file : DeckofCards.js
* @overview : distribute 9 Cards to 4 Players Print the Cards the received by the 4 Players  
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 19/11/19
**********************************************************************************************/
var r1=require('readline-sync')
var card=require('../oopsUtility/deckcard')
const util=require('../utility/queue')
const queue= new util.queue;

var deck =new card.Deckcard();
class Deckcards{
    game(){
        var cards=deck.deckofcard()
        console.log(cards)

        var noOfCards=cards.length;
        console.log(noOfCards)

        var shuffleCards=deck.shuffleCard(noOfCards,cards)
        console.log(shuffleCards)
    
        for(var k=0; k<noOfCards; k++){
            queue.enqueue(shuffleCards[k])
        }
        console.log("Distributing 9 cards tp players")
        var k =0;
        for(let i=1;i<=4; i++){
            console.log('\nplayer Number'+i+ "have cards:");
            for(let j=0;j<9; j++){
                var arr = "";
                console.log(queue.dequeue())
                k++;

            }
        }
    }
}
var play=new Deckcards();
play.game();