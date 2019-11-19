//this is to be restructured as db info. probably sql. but i need to get the ides fleshed out first

//TODO NEXT: test the theTruth function. does it correctly set the truth?
//THEN: run similar test on theLies. then try to change the values

class Word {
    constructor(word, origin, nodes, truth, variations, theTruth) {
        this.word = word, //'what is this word?'
            this.origin = origin, //'where did this word start?'
            this.nodes = nodes
        /*[{
        location: "heard here",
        saturation: "this much"
        }]*/
        this.truth = truth, // "what is really going on here?"
            this.variations = variations //[{ keywords: "params based on the word", text: "the alternate truth" }] //each object is like a mini truth
        this._theTruth = theTruth //this could be pulled from a module
    }
    theTruth() {
        this.truth = this._theTruth.text
        this._theTruth.keywords.forEach((e) => {
            let e2 = e.toLowerCase()
            let s = this.truth.replace(e, this[e2])
            this.truth = s
        });
    }
    theLies(keys, changes) { //this works, but not well
        let lie = this._theTruth.text
        for (let i = 0; i < keys.length; i++) {
            lie = lie.replace(keys[i], changes[i])
        }
        this.variations.push(lie)
        //replace some of the keywords in _theTruth and store the result in variations
        //save the true keywords, falsify them, store the variant, return keywords to truth
        //forEach keywords > this...keywords[i] = rand() || false()
        //this.variations.push(this._theTruth.text)
        //forEach keywords > this...keywords[i] = true() 
        //the function needs to take in an array
        //the array must contain all keywords
        //blanks should equal no change
        //hmm... i have an array to id changes, but not the changes themselves
        //two arrays, an object, or a seperate list to pull the changes?
        //two arrays is the easiest, an object will require a different method, a seperate list will require more data to be built
        //the second arrary could be run through a different function to improve flexibility
        //this should have a specfic replace and a random replace
    }
    objGrab(obj) {
        let keys = (Object.keys(obj))
        console.log(keys)
        return keys
    }
}

//so maybe the Word needs to extend to some different types?
class Locale extends Word {
    constructor(word, origin, nodes, truth, variations, direction, region, type, theTruth) {
        super(word, origin, nodes, truth, variations, theTruth); {
            this.direction = direction, //'north, south, etc' //this structure makes it easier to replace bits
                this.region = region, //'The Badlands, Gallia, eg'  //is this.region required?
                this.type = type //'city, town, mountain, forest, eg' //too broad?
            //can a super truth reference these items?
        }
    }
}


//i need a method for truth to create variants
const Frostholm = new Locale(
    'Frostholm',  //word
    'Frostholm',  //origin
    [{ location: 'Town', saturation: 20 }, { location: 'Bed', saturation: 10 }], //nodes
    ``, //truth
    [], //variations //end word constructors
    'north', //Location.direction
    'Everfrost', //Location.region
    'city', //Location.type
    { //theTruth is accessed later to set the truth and variants
        text: `this is a blurb of varying length. it references itself. eg, WORD is a TYPE in the REGION`,
        keywords: ['WORD', 'TYPE', 'REGION'] //should these be var or string?
    }
)

/*
variations needs a function
it takes in the keywords and the text, alters some (||all ||none) of them and stores the result in variants array
truth can work in a similar manner: the string with vars is stored on the object, then later accessed to create the .truth value
*/

// Frostholm.region = `Badlands`
// Frostholm.truth = `this is a blurb of varying length. it references itself. eg, ${Frostholm.word} is a ${Frostholm.type} in the ${Frostholm.region}`
// update(Frostholm, truth, `this is a blurb of varying length. it references itself. eg, ${Frostholm.word} is a ${this.type} in the ${this.region}`)
/* ref info added in next step
text: `this is a blurb of varying length. it references itself. eg, ${this.word} is a ${this.type} in the ${this.region}`
    [  //variations
        { keywords: ['city', 'south'], text: `` },
        { keywords: ['temple', "north"], text: `` },
        { keywords: [this.type, this.region], text: `alternate blurb!` }
    ]
*/

const Garland = new Locale('word', 'origin', 'nodes', 'truth', 'variations', 'direction', 'region', 'type') //this should break

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

/* Example Set - memetics
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

Frostholm.theTruth()
Frostholm.theLies(['WORD','TYPE','REGION'], [Frostholm.word, 'temple', Frostholm.region])
//this needs a function to default to the truth or something
//maybe it takes in an object to replace specfic bits?
//eg: { type: 'temple' }, only replaces the TYPE keyword? the others are unchanged?
//{ all: random }, to randomize all keywords?
//{ region: random } to randomize a particular keyword
//{ all: random, region: true } randomizes !region

console.log(Frostholm.objGrab({name:'bo', type:'staff'}))
