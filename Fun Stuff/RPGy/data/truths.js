const Locales = [
    {
        Frostholm: `this is a blurb of varying length. it references itself. eg, ${word} is a ${type} in the ${region}`,
        keywords: ['word', 'type', 'region']
    }
]

//will likely need a different method, eg RegEx
//maybe instead of vars, use WORD and TYPE etc.
//then id them via keywords and replace them with RegEx finders
//find a specfic place with Locales[i][placeName]

const LocaleTypes = [
    'city', 'town', 'village', 'forest', 'mountain'//could seperate out city-ish from terrain-ish
]

const LocaleRegion = [
    'Town', 'Everfrost', 'Gallia'
]

const LocaleDirection = [ //these could be more generalized for flexibility
    'north', 'south', 'etc'
]

//maybe i should start with a clone just for easy data dumping
//my preference of course would be final fantasy...
//but it doesn't quite reach what I had in mind :/
//what about fairy tales? those are plentiful and miss a lot of issues...

const Tales = [
    'Hansel and Gretel',
    'Alice in Wonderland',
    'Aesop',
]

const Characters = [
    'Hansel',
    'Gretel',
    'Alice'
]

//hmmm... even still, a straight clone is probably easier. more direction, less creative prereqs.

/* Pokemon Red/Blue Clone data */
const Towns = [
    'Pewter',
    'Cerulan',
    'Vermillion',
    'Celadon',
    'Saffron',
    'Fuschia',
    'Cinnabar',
    'Viridian',
    'Lavendar',
    'Indigo',
    'Pallet',
    'Porta Vista',
    'Cremini',
    'Commerce',
    'Gringey',
    'Dark',
    'Stone',
    'Gardenia',
    'Hollywood',
    'HopHopHop',
    'Neon',
    'Hutber',
    'Laramie',
    "Maidien's Peak",
    'Matcha',
    'Mossgreen',
    'Mullberry',
    "O'Hina",
    "Old Shore Warf",
    'Rifure',
    'Rota',
    'Sable',
    'Silver',
    'Sunnyton',
    'Terracotta',
    'Wisteria'
]

const Gyms = [
    'Rock',
    'Water',
    'Lightening',
    'Psychic',
    'Grass',
    'Poison',
    'Fire',
    'Earth',
]

const Islands = [

]

const Features = [
    {
        name: 'Viridian Forest',
        type: 'Forest'
    },

]