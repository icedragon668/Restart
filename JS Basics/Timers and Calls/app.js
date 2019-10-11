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