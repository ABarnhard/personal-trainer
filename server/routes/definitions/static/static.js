'use strict';

module.exports = {
  description: 'Static Files',
  tags:['static'],
  auth: false,
  handler: {
    directory: {
      path: __dirname + '/../../../../public'
    }
  }
};
