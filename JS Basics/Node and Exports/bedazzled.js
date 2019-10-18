const developerTools = {
    drink: 'Coffee',
    keyboard: 'Noppoo Choc Mini',
    codeEditor: 'VS Code',
  };
  
  const somethingWeDontNeed = 'mosquitos';
  
  const reminder = function () {
    console.log('Get back to work!');
  }
  // module.exports is essentially an object that we can add data or variables to
  // We can access them from other files using the 'require' keyword.
  
  module.exports = {
    developerTools: developerTools,
    note: reminder //alias in other files : variable name above
  };
  