const friendList = [
    {
      name: 'Sally',
      status: 'online'
    },
    {
      name: 'Jim',
      status: 'online'
    },
    {
      name: 'Mina',
      status: 'offline'
    },
    {
      name: 'Matt',
      status: 'online'
    },
    {
      name: 'Netreia',
      status: 'offline'
    }
  ]

  //block 1 code
  let fList = '';
  
  render = (c) => {
    $('body').append(c)
  }

  getFriends = () => {
      friendList.forEach(e=>{
        fList += `<p>${e.name}</p>`
      })
      render(fList)
  }

  
  setTimeout(getFriends, 3000)
  
  /*
  ## Instructions Block1

Use a loop to get all the names from the friendList after 3 seconds.
 Append each name to a string surrounded by paragraph tags.
  Your string should look something like `<p>Sally</p><p>Jim</p>`.

Once you have all the names, use the render function to render
 the whole string to the page.
END BLOCK 1*/

//BLOCK 2
let mList = '';
const movies = response.data.movies  
getMovies = () => {
    movies.forEach(e=>{
        mList += `<p>${e}</p>`
    })
    render(mList)
}

setTimeout(getMovies, 1000)

/*
## Instructions

Now that we're getting the hang of things happening asynchronously,
 let's try a tougher one. 

This is similar to the last exercise, but like last class,
 we are now getting our data from somewhere else
  and can't see it until it arrives. 

Use a loop to get all the movies from the incoming data after 1 second.
 Append each movies to a string surrounded by paragraph tags.
  Your string should look something like
   `<p>the matrix</p><p>the godfather</p>`.

Once you have all the names, add a render function that renders
 the whole string to the page.
END BLOCK 2*/

//Block 3
const URL = "https://api.iextrading.com/1.0/"
const APPLE = "stock/aapl/quote";
const MICRO = 'stock/msft/quote';
const BATCH = "stock/market/batch?symbols=tsla,amzn,taco&types=price"


//this was written for jQuery...
//going to have to learn fetch()
//seems to be a server side error
// have to find out why, or move on and try a different api :p
//on the plus side, fetch() seems to be okay
/*
fetch(`${URL}${APPLE}`)
 .then(data => {return data.json()})
 .then(res=>{
     //console.log(res)})

     $('body').append(`APPLES are ${res.aapl.price}`)
 })
 */

/*
## Instructions

* Go to the [iexTrading API](https://iextrading.com/developer/docs)
 then use the documentation to try to answer the following:

1. How would I query the iexTrading API to get all of the stock
 information related to Apple Inc.?

2. How would I query the iexTrading API to get all of the stock
 information related to Microsoft Inc.?

## Challenge

* Using the documentation, figure out how you would retrieve the
 prices of multiple stocks in one.

* _Hint:_ The solution isn't in the `Price` section of the documentation.
END BLOCK 3 */