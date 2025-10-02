'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/projects',
      handler: 'project.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/projects/:id',
      handler: 'project.findOne',
      config: {
        policies: [],
      },
    },
  ],
};
