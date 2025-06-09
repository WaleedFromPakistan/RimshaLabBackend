'use strict';

/**
 * mission-vision service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mission-vision.mission-vision');
