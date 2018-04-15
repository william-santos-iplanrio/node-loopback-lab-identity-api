'use strict';

var loopbackPassport = require('loopback-component-passport');

module.exports = function(app) {

  var PassportConfigurator = loopbackPassport.PassportConfigurator;
  var passportConfigurator = new PassportConfigurator(app);
  
  passportConfigurator.init();
  passportConfigurator.setupModels({
    userModel: app.models.User,
    userIdentityModel: app.models.UserIdentity,
    userCredentialModel: app.models.UserCredential,
  });

  passportConfigurator.configureProvider(
    'facebook-login',
    require('../providers.json')['facebook-login']
  );

  passportConfigurator.configureProvider(
    'google-login',
    require('../providers.json')['google-login']
  );
 
  passportConfigurator.configureProvider(
    'twitter-login',
    require('../providers.json')['twitter-login']
  );
};
