//this is to be restructured as db info. probably sql. but i need to get the ides fleshed out first

//now would be a good time to review classes lol

class Word {
    constructor(word, origin, nodes, truth, variations) {
        this.word = word, //'what is this word?'
        this.origin = origin, //'where did this word start?'
        this.nodes = nodes
            /*[{
            location: "heard here",
            saturation: "this much"
            }]*/
        this.truth = truth, // "what is really going on here?"
        this.variations = variations //[{ keywords: "params based on the word", text: "the alternate truth" }] //each object is like a mini truth
    }
}

//so maybe the Word needs to extend to some different types?
class Location extends Word {
    constructor(word, origin, truth, nodes, variations, direction, region, type) {
        super(word, origin, truth, nodes, variations); {
            this.direction = direction, //'north, south, etc' //this structure makes it easier to replace bits
            this.region = region, //'The Badlands, Gallia, eg'  //is this.region required?
            this.type = type //'city, town, mountain, forest, eg' //too broad?
            //can a super truth reference these items?
        }
    }
}


//the variations object needs work...
const Fostholm = new Location(
    'Frostholm',  //word
    'Frostholm',  //origin
    [{ location: 'Town', saturation: 20 }, { location: 'Bed', saturation: 10 }], //nodes
    { //truth
        keywords: {
            direction: 'north',
            region: 'Everfrost',
            type: 'city'
        },
        text: `this is a blurb of varying length. it references itself. eg, ${this.name} is a ${this.truth.keywords[0]} in the ${this.truth.keywords[1]}` //this is why... keywords.type and keywords.direction make more sense
    },
    [  //variations
        { keywords: ['city', 'south'], text: this.truth.text },
        { keywords: ['temple', "north"], text: this.truth.text },
        { keywords: [this.truth.keywords[0], this.truth.keywords[1]], text: `alternate blurb!` }
    ]
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