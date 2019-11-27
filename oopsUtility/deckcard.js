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
            var r = i + parseInt(Math.random() * (n -i))
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