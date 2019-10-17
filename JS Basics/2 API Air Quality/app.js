//fetch https://restcountries.eu/rest/v2/name/${countryName}`
//  response[0].alpha2code
const getCountryCode = function(country) {
    const qURL = `https://restcountries.eu/rest/v2/name/${country}`
    fetch(qURL)
    .then(res=>res.json())
    .then(function(res) {
        console.log(res[0].alpha2Code)
    })
}

//on click, get input, run API for country code
document.addEventListener('click', function(e){
    e.preventDefault()
    if (e.target.matches('#search')) {
        const input = document.querySelector('#country').value
        document.querySelector('#country').value = ''
        getCountryCode(input)
    }
})
//then get AQ API
//fetch `https://api.openaq.org/v1/latest?country=${countryCode}`
//  response.results[i].measurements.parameter === 'pm10'
//render: div class box \n Code \n avg
// if (avg > 40) {addclass red}
//if (avg > 20) {addclass purple}
//else {addclass blue}

/* Block 1
# Mini Project I

## Instructions:

To complete our mini-project, we need to use 2 APIs. The first takes in a country name and gives us back a lot of data. The data that we are concerned with is the `alpha2code` code for the country.

#### REST Countries:

Read the documentation `https://restcountries.eu/` for the REST countries API.

Test query URLs by simply pasting them into the address bar in Chrome.

Find a query URL that gives you the information on Mexico.

Look through the data and discuss with your group how you would access the alpha-2 code.

#### Open AQ:

Read the documentation `https://docs.openaq.org/` for the Open Air Quality API.

Test query URLs by simply pasting them into the address bar in Chrome.

Find a query URL that gives you the latest measurements for Mexico (Note that you will need the 2 character alpha-2 code from the REST Countries API).

Look through the data and discuss with your group how you would access the `pm10` measurement for each location.
*/

/* Block 2
# Mini Project II

## Instructions:

Given the project requirements below, flowchart out the project. Focus on high-level details. Think about how the APIs need to interact and what data needs to be rendered.

1. Users can input a country.
2. The application will retrieve data on air pollution in that country.
3. The data will be visually represented using colors (blue means low pollution, purple means medium, red means high pollution).

The API calls used will look similar to the API calls below:

`https://restcountries.eu/rest/v2/name/mexico` - from this API, you can get the alpha-2 code for a country by supplying the country name.

`https://api.openaq.org/v1/latest?country=MX` - from this API, you can get information about air quality for a country by supplying the alpha-2 code. We are interested in the average `pm10` reading of all the locations in a country.  

**Hint:**

Consider starting by putting the above URLs in your browser and checking out the returned data if you haven't already.
*/

/* Block 3
# Mini Project III

## Instructions:

Take some time to go over the code with your group.

Run the application and note the air quality data for Mexico is logging to the console.

Your job is to drill into the data that is being displayed and log only the values associated with the `pm10` parameter in each location for Mexico.

**Hint:**

You will need nested loops. 
*/

/* Block 4
# Mini Project IV

##Instructions:

Alter the code in `OpenAQ` to log the average of the pm10 measurements for all of Mexico rather than each individual measurement.

**Hint:**

Remember the average is the sum of all the measurements divided by the number of measurements.
*/

/* Block 5
# Mini Project V

## Instructions:

In `app.js` add code to retrieve user input when the search button is clicked.

Use that input to make the API calls work for the user input country.
*/

/* Block 6
# Mini Project VI

## Instructions:

All the CSS that you need for this activity has been provided.

Inside the render function, add code to append a new div with a class of `box` to the display area. The div should have the country code and pm10 average in it.

Call this function from the appropriate place to render a new div for each searched country.

## Challenge:

Inside the render function add code to add a `red` class to new divs with and average pm10 above 40, a `purple` class to new divs with and average pm10 above 20 and below 41m, and a `blue` class to new divs with and average pm10 below 21.
*/