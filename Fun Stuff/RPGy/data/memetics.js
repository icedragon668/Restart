//this is to be restructured as db info. probably sql. but i need to get the ides fleshed out first

//now would be a good time to review classes lol

class Word {
    constructor(word, origin, truth, nodes, variations) {
        this.word = 'what is this word?',
            this.origin = 'where did this word start?',
            this.truth = "what is really going on here?",
            this.nodes = [{
                location: "heard here",
                saturation: "this much"
            }]
            this.variations = [{ params: "params based on the word(?)", variations: "the alternate truth" }]
    }
}
//the variations object needs work...
const Fostholm = new Word(
    'FrostHolm',
    'Frostholm',
    //type: location //maybe needs a type? //maybe a sub or super class?
    { keywords: ['city', 'north'], //okay, maybe an object? //again sub/super
     text: `this is a blurb of varying length. it references itself. eg, ${this.name} is a ${this.truth.keywords[0]} in the ${this.truth.keywords[1]}`} //this is why... keywords.type and keywords.direction make more sense
)

class Character {
    constructor(name, location, routine, memetics) {
        this.name = 'name',
            this.location = 'general, not specfic',
            this.routine = [{
                location: "specfic",
                time: "at this time"
            }],
            this.memetics = {
                learnAccuracy: "how accurately do they learn something",
                learnRate: "how likley are they to pick up something new?",
                recountRate: "how likely are they to bring up a new idea?",
                recountAccuracy: "how accurately do they recount the new idea?"
            }
    }
}

/* Example Set 1 - memetics
the char Foli is only good at learning accuracy, they do not offer new info, they don't observe new things, and they mis-remember (create new variants)
the char Teki is observant, they are always learning new ideas. and they remember them well. But, they might not have learned them correctly...
*/

const Foli = new Character(
    'Foli',
    'Town',
    [
        { location: 'Town', time: 'day' },
        { location: 'Bed', time: 'night' }
    ],
    {
        learnAccuracy: 100,
        learnRate: 10,
        recountRate: 10,
        recountAccuracy: 10
    }
)

const Teki = new Character(
    'Teki',
    'Town',
    [
        { location: 'Town', time: 'night' },
        { location: 'Bed', time: 'day' }
    ],
    {
        learnAccuracy: 10,
        learnRate: 100,
        recountRate: 100,
        recountAccuracy: 100
    }
)