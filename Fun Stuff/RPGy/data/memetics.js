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
        this._theTruth = theTruth
    }
    theTruth() {
        this._theTruth.keywords.forEach((e)=>{
            console.log(e)
            this._theTruth.text.replace(e, this._theTruth.keywords[e])
        });
        this.truth = this._theTruth.text
    }
    theLies() {
        //replace some of the keywords in _theTruth and store the result in variations
        //save the true keywords, falsify them, store the variant, return keywords to truth
        //forEach keywords > this...keywords[i] = rand() || false()
        //this.variations.push(this._theTruth.text)
        //forEach keywords > this...keywords[i] = true()
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
    [``], //variations //end word constructors
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

const Garland = new Locale('word','origin','nodes','truth','variations','direction','region','type') //this should break

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

Frostholm.theTruth()
console.log(Frostholm.truth)
//i think the issue is the the data needs to be loaded first, be it can be referenced. This makes new Words a two step (or more) process...
