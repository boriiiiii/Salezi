'use strict';

/**
 * dvd service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dvd.dvd');
