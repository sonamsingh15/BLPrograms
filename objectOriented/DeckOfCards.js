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
var r1=require('readline-sync');
var card=require('../oopsUtility/deckcard');

var deck=new card.Deckcard;

class DeckOfCards{
    game(){
        var cards=deck.deckofcard()
        console.log(cards)
    
    //number of cards
    var noOfCards = cards.length
    console.log(noOfCards)

    //shuffle cards
    //var ShuffleCards = deck.shuffleCard(noOfCards ,cards)
   // console.log(ShuffleCards)

   // var Players=r1.questionInt("Enter the number of players::")
   // var cards =r1.questionInt("Enter the number of card distribute::")
    var distribute= deck. distrubutesCard(Players,cards,ShuffleCards);
    console.log(distribute)
    }
   
}
    
var play= new DeckOfCards()
play.game()