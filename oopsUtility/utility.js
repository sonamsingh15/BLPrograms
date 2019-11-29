var fs=require('fs');
var r1= require('readline-sync')
module.exports=
{
    readFile(path)
    {
     var fs=require('fs')   
     var content=fs.readFileSync(path,JSON.parse(path),'utf8');
     return content;
    },
    writeFile(path,data)
    {
    var fs =require('fs')
    var content=fs.writeFileSync(path,data,'utf8');
    return content;
    },
   
    inputStringRead()
    {
        try
        {
            let value =r1.question("");
            if(value == undefined)  throw 'cannot be undefined'
            return values;


        }
        catch(error){
            return error
        }
        
    },
    inputIngerRead()
    {
        try
        {
            let value=r1.question("")
            if(value == undefined) throw 'cannot be undeffined'
            return value;
        }
        catch(error)
        {
            return error
        }
        
    },
    //------------------------------------deck of cards-------------------------------
    
  DeckOfcards() 
        {
    
            var suitsArray = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
            var rankArray = ['jack', 'Queen', 'king', 'Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10,]
           var cards=[],shuffle,noOfCards;
    
            for (var i = 0; i < suitsArray.length; i++) {
                for (var j = 0; j < suitsArray.length; j++) {
                    
                 cards.push(suitsArray[i]+" "+rankArray[j]) 
                }
            }
          
        
    //no of cards---------------
        noOfCards=cards.length
         
            for (var i = 0; i < noOfCards; i++) {
                shuffle = Math.floor(Math.random() * (noOfCards))
                var temp = cards[shuffle]
                cards[shuffle] = cards[i]
                cards[i] = temp
            }
            return cards;
        },
       distrubutesCard()
        {
        var player =[[],[],[],[]]
        var cards=deckofcard();
        var cardsperUser=0;
        
        for(i=0;i<4;i++)
        {
            for(j=0;j<9;j++){
                player[i][j]=cards[j+cardsperUser]
            }
            cardsperUser=Math.floor(Math.random()*(cards.length-1))
        }
        console.log("----------cards recive by 4players------------------------")
        console.log("\nPlayer1 : ",player[0].join());
        console.log("\nPlayer2 : ",player[0].join());
        console.log("\nPlayer3 : ",player[0].join());
        console.log("\nPlayer4 : ",player[0].join());
    
    
        }
}

class Deckcard {
    deckofcard() {

        var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
        var values = ['jack', 'Queen', 'king', 'Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10,]
        var n = values.length * suits.length

        //create nwe array
        var array = new Array(n)

        for (var i = 0; i < values.length; i++) {
            for (var j = 0; j < suits.length; j++) {

                array[suits.length *i + j] = values[i] + suits[j]
            }
        }
        return array
    }

    shuffleCard(n, array) {
        for (var i = 0; i < n; i++) {
            var r = Math.floor(Math.random() * (n ))
            var temp = array[r]
            array[r] = array[i]
            array[i] = temp
        }
        return array;
    }
    distrubutesCard(players, cards, shufflArray) {
        var k = 0;
        var arr = new Array();
        for (var i = 0; i < players; i++) {
            arr[i] = new Array();

            for (var j = 0; j < cards / players; j++) {
                arr[i][j] = shufflArray[k++]
            }
        }
        return arr
    }
}
module.exports = {
    Deckcard
}