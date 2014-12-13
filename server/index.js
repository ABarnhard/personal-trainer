'use strict';

var Hapi           = require('hapi'),
    server         = new Hapi.Server(),
    routes         = require('./routes/config/routes'),
    plugins        = require('./routes/config/plugins'),
    authentication = require('./routes/config/authentication'),
    mongoose       = require('mongoose');

server.connection({address: '0.0.0.0', port: process.env.PORT});
mongoose.connect(process.env.MONGODB_URL);

mongoose.connection.once('open', function(){
    server.register(plugins, function(){
      server.auth.strategy('session', 'cookie', true, authentication);
      server.route(routes);
      server.start(function(){
        server.log('info', server.info.uri);
      });
    });
});
