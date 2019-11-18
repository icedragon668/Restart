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
const Towns = [ //cities, towns, etc. //they will need to become objects with more data
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
    'Wisteria',
    'Acapulco',
    `Crimnson`,
    `Frodomar`
]

const Gyms = [ //could expand to each!
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
    'of the Giant Pokemon',
    'Camomile',
    'Chrysanthemum',
    `Metallica`,
    `New`,
    `Sayda`,
    `Seafoam`,
    `Cerise`
]

const Features = [ //this needs renaming //maybe too broad too //landmarks and geography?
    {
        name: 'Viridian Forest',
        type: 'Forest'
    },
    {
        name: `Bill's Lighthouse`,
        type: 'Residence'
    },
    {  
        name: `Cameran`,
        type: 'Palace'
    },
    {
        name: `Camp Pokehurst`,
        type: `School`
    },
    {
        name: `Evolution`, //Stone Town is near, how to track this?
        type: `Mountain`
    },
    {
        name: `Fennel`,
        type: `Valley`
    },
    {
        name: `Grandpa Canyon`, 
        type: `Valley`
    },
    {
        name: `House of Imitay`,
        type: `Residence`
    },
    {
        name: `Leaf`,
        type: `Forest`
    },
    {
        name: `Mirage Mansion`,
        type: `Residence`
    },
    {
        name: `Hideaway`,
        type: `Mountain`
    },
    {
        name: `Pokelantis`,
        type: `Ruin`
    },
    {
        name: `Pokemon Land`,
        type: `Park`
    },
    {
        name: `Pokemon Lover's Club`,
        type: `Secret`
    },
    {
        name: `Hidden Village`,
        type: `Secret`
    },
    {
        name: `Ninja School`,
        type: `School`
    },
    {
        name: `Pokemon Tech`,
        type: `School`
    },
    {
        name: `Pokemon Park`,
        type: `Park`
    },
    {
        name: `Fighting Spirit Gym`,
        type: `School`
    },
    {
        name: `AJ's Gym`,
        type: `School`
    },
    {
        name: `Kaz Gym`,
        type: `School`
    },
    {
        name: `Pokemopolis`,
        type: `Ruin`
    },
    {
        name: `Safari Land`, //Reserve
        type: `Park`
    },
    {
        name: `Safari Zone`,
        type: `Park`
    },
    {
        name: `Sakuragi Institute`,
        type: `School`
    },
    {
        name: `Team Rocket Academy`,
        type: `School`
    },
    {
        name: `Tree of Begining`,
        type: `Forest`
    },
    {
        name: `Xanadu Nursery`,
        type: `Forest`
    },
    {
        name: `Yaz Gym`,
        type: `School`
    },
    {
        name: `Celadon University`,
        type: `School`
    },
    {
        name: `Spirit`,
        type: `Mountain`
    },
    {
        name: `Moon`,
        type: `Mountain`
    },
    {
        name: `Cerulan`,
        type: `Cave`
    },
    {
        name: `Diglett's`,
        type: `Cave`
    },
    {
        name: `Pokemon Mansion`,
        type: `Ruin`
    },
    {
        name: `Pokemon Tower`,
        type: `Residence` //maybe?
    },
    {
        name: `Power Plant`,
        type: `Ruin`
    },
    {
        name: `Rock Tunnel`,
        type: `Cave`
    },
    {
        name: `Victory Road`,
        type: `Cave`
    },
]

const FeaturesTypesArray = [
    //just how it sounds
    `Town`,
    `Gym`,
    `Island`,
    `Forest`,
    `Residence`,
    `Palace`,
    `School`,
    `Moantain`,
    `Valley,`
]