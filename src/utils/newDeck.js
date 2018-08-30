const CARD_RANKS = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'J',
    'Q',
    'K',
    'A'
];

const SUITS = [
    'C',
    'D',
    'H',
    'S'
];

/**
 * Creates a new deck of cards array
 * @returns {Array.<{rank: string, suit: string}>}
 */
function newDeck() {

    // /////////////////////////////////////////
    //
    // TUTORIAL
    //
    // Create an array of card object, each of
    // which has a `rank` and `suit` property
    //
    const deck = [];

    for (let i = 0; i < CARD_RANKS.length; i++) {
        for (let j = 0; j < SUITS.length; j++) {
            const card = {rank: CARD_RANKS[i], suit: SUITS[j]};
            deck.push(card)
        }
    }

    // shuffle deck
    let i = deck.length;
    while(i--) {
        Math.random()

    }

    return deck;
}

if (require.main === module) {
    console.log(newDeck());
} else {
    module.exports = newDeck;
}
