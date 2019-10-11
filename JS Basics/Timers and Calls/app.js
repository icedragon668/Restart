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

  setTimeout(getFriends, 3000)
  /*
  ## Instructions

Use a loop to get all the names from the friendList after 3 seconds.
 Append each name to a string surrounded by paragraph tags.
  Your string should look something like `<p>Sally</p><p>Jim</p>`.

Once you have all the names, use the render function to render
 the whole string to the page.
*/