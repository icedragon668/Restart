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
    {
        name: `Town`,
        note: `
        Has houses at very least. Pretty much everything else is optional.
        It may have shops, centers, gyms commonly.
        Uncommonly, well just about anything
        `
    },
    {
        name: `Gym`,
        note: `
        This is a major focus. It is a themed arena for trainers to battle, grow, and earn badges...
        `
    },
    `Island`,
    `Forest`,
    `Residence`,
    `Palace`,
    `School`,
    `Moantain`,
    `Valley,`,
    `Ruin`,
    `Park`,
    `Secret`,
    `Cave`
]

/* DESIGN NOTES

    Alter the tools for interacting with the world each playthrough
    rewards keeping a smaller team (leveling them / legacy), but also catching different/many
    different achievments unlock bonuses (a full team of a type or a particular order), they are not the same (psychic doesn't boost psychic) (maybe?)
    interconnected map with different tools leading to different places (advanced or secret) (maybe randomize the needed tool?). but most of the map is open
    the world doesn't level: randoms are roughly static. ie sometimes you have to run
    advanced levels grant a capture option. allows powerful creatures to be viable for hunting without overpowering
    try to cut grinding per game. yes there is some, but spread across playthroughs
    advanced tools are not more powerful, just different. this allows a random 'speciality' at start without breaking play
    everything is *available* at start. but hitting everything on the first run is very grindy (the grinding is supposed to be spread out)
    gyms and trainers are more difficult with more badges/exp. eg if you have no badges, the gym is easier than if you have four
    -both are replayable, but are not the 'attack on sight' tye by default
    
    "League Rules": 
        you both have the same number of 'mon, losing doesn't mean you're dead, just those 'mons
        some trainers (including the trainer) can break the rules. penalties apply

    roadblocks should have alternate solutions. so they can be cleared with different solutions
        eg: snorlax is blocking the road! you can FLY over, DIG under*, CUT around, or WAKE it up.
        each achieved ability makes the next harder (without legacy mastery)
        *: DIGing runs a risk of cave-in (maybe the others should have drawbacks too?)
    
    the story is basic: Become a Master
        this has X paths:
            1: defeat the league
                a: gather badges to permit entrance
                b: pass the academy
                c: break in
            2: catch 'em all!
            3: type/'mon mastery (the latter is super grindy)
                a: win badges with type/'mon
                b: pass the academy with type/'mon
                c: clear all roadblocks/secrets/sidequests with type/'mon
            4: help the world!
                a: clear out the various problems in the world
            5: get max power
                a: 'mon stats
                b: 'mon levels
                c: player stats
                d: player levels

    player creation
        the player has their own preferences. favorite 'mon, fave type etc. they may not line up
        hometown can change, temperment (aggressive is mostly attack, passive is defense, tactician for status, eg)
        player has stats
            command - orders obyed
            loyalty - stick with the trainer (function needs fleshing //pokemon that are disloyal may leave?)
            compassion - care/love
            strategy - technique pool
            passion/drive - it works even though it really shouldn't
        Story and Freeplay
            the main difference is Legacy
                story must be unlocked
                    'mastering" story mode is like freeplay++
                free is all available, but reduced value, doesn't unlock things

    Mobility: (maybe one per type?)
        FLY (flying) - fly up high
            low chance, but accessible anywhere
            indoors has severe penalties
            difficult terrain (fog, forest, etc) applies penalties
        DIG (ground) - burrow through ground/rock
            low chance in dirt areas, higher chance in valleys and mountains
            has a structure component. may cause a cave-in
            permanant vs tempory tunnels
        STOMP (rock?) - crush or flatten
        PUSH (fight?) - move large things (STRENGTH?)
        SURF (water?) - skim across water
        DIVE (water?) - go underwater //water gets two? kinda makes sense, they are pretty different
        FLASH (fire?) - light up dark places (more places require)
        CUT (bug (?)) - chop and slash
        TELEPORT (psychic)
        PHASE (ghost)
        CHARGE(?) (electric?)
        (normal) //maybe nnrmal doesnt get one and water gets 2? //ATV, interact with the environment in a 'natural' way. higher risk, but versatile?
        (grass?) //pollenate? fertilize? (grow plants to create [stairs eg]) just call it 'grow'?
        (steel?) weld? bend? a la magneto? magnet? smelt :p
        (ice?) freeze? maybe freeze allows skating across water?
        (poison move?) pollute?? corode? corode is neat, or dissolve. eats away materials
        (dark?) opposite of flash? maybe more flash to normal? ...eh
        (fairy?) ??? Fey Wilds, enter the wilds with strange results (world altering?)
        (dragon?) ??? Storm, draconic power reshapes the world! ( i duno lol)


    Construction:
        by combining Mobility Techs, you can build!
        DIG out an area then STOMP it flat for a foundation
        CUT or CRUSH(?) building materials then PUSH(rename?) them into place
*/