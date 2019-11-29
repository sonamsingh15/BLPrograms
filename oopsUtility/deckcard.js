class Deckcard {
    deckofcard() {

        var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
        var values = ['jack', 'Queen', 'king', 'Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10,]
        var cards=[],shuffle,noOfCards
       

        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < values.length; j++) {

                cards.push(suits.length [i]+" "+values[j])
            }
        }
          for (var i = 0; i < n; i++) {
            var shuffle = Math.floor(Math.random() * (n ))
            var temp = cards[shuffle]
            cards[shuffle] = cards[i]
            cards[i] = temp
        }
        return cards;
    }
    distrubutesCard(players, cards) {
        var players=[[],[],[],[]]
        var cards = this.deckofcard;
        var cardsperUser = 0;
        for (var i = 0; i < 4; i++) {
            
            for (var j = 0; j < 9; j++) {
                players[i][j] = cards[j+cardsperUser]
            }
        }
        cardsperUser=Math.floor(Math.random()*(cards.length-1))
        
    }

}


console.log("----------cards recive by 4players------------------------")
console.log("\nPlayer1 : ",players[0].join());
console.log("\nPlayer2 : ",players[0].join());
console.log("\nPlayer3 : ",players[0].join());
console.log("\nPlayer4 : ",players[0].join());





module.exports = {
    Deckcard
}
   

  




