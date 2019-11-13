//this is to be restructured as db info. probably sql. but i need to get the ides fleshed out first

//now would be a good time to review classes lol

const Word = {
    word: 'what is this word?',
    origin: 'where did this word start?',
    truth: "what is really going on here?",
    locations: ['places this word has been heard'],
    saturation: ['how common is this word?','linked to location'],
    variations: [{params: "params based on the word(?)", variations: "the alternate truth"}]
}
//the variations object needs work...

class Character {
    constructor(name, location, routine, memetics) {
    this.name= 'name',
    this.location= 'general, not specfic',
    this.routine= [{
        location: "specfic",
        time: "at this time"
    }],
    this.memetics= {
        learnAccuracy: "how accurately do they learn something",
        learnRate: "how likley are they to pick up something new?",
        recountRate: "how likely are they to bring up a new idea?",
        recountAccuracy: "how accurately do they recount the new idea?"
    }
}}

/* Example Set 1 - memetics
the char Foli is only good at learning accuracy, they do not offer new info, they don't observe new things, and they mis-remember (create new variants)
the char Teki is observant, they are always learning new ideas. and they remember them well. But, they might not have learned them correctly...
*/

const Foli = new Character(
    'Foli',
    'Town',
    [
        {location: 'Town', time: 'day'},
        {location: 'Bed', time: 'night'}
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
        {location: 'Town', time: 'night'},
        {location: 'Bed', time: 'day'}
    ],
    {
        learnAccuracy: 10,
        learnRate: 100,
        recountRate: 100,
        recountAccuracy: 100
    }
)