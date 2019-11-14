const Locales = [
    {Frostholm: `this is a blurb of varying length. it references itself. eg, ${word} is a ${type} in the ${region}`,
    keywords: ['word', 'type', 'region']}
]

//will likely need a different method, eg RegEx
//maybe instead of vars, use WORD and TYPE etc.
//then id them via keywords and replace them with RegEx finders
//find a specfic place with Locales[i][placeName]