//this is to be restructured as db info. probably sql. but i need to get the ides fleshed out first

//now would be a good time to review classes lol

const Word = {
    word: 'what is this word?',
    origin: 'where did this word start?',
    locations: ['places this word has been heard'],
    saturation: ['how common is this word?','linked to location'],
    accuracy: 'how accurate is the word to the truth?'
}

const Character = {
    name: 'name',
    location: 'general, not specfic',
    routine: {
        location: "specfic",
        time: "at this time"
    },
    memetics: {
        learnAccuracy: "how accurately do they learn something",
        learnRate: "how likley are they to pick up something new?",
        recountRate: "how likely are they to bring up a new idea?",
        recountAccuracy: "how accurately do they recount the new idea?"
    }
}