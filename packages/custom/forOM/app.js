'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var ForOM = new Module('forOM');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ForOM.register(function(app, auth, database, system) {

  //We enable routing. By default the Package Object is passed to the routes
  ForOM.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  ForOM.menus.add({
    title: 'forOM example page',
    link: 'forOM example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  // Set views path, template engine and default layout
  app.set('views', __dirname + '/server/views');
  
  ForOM.aggregateAsset('css', 'forOM.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    ForOM.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    ForOM.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    ForOM.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return ForOM;
});
