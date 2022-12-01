'use strict'

const preset = process.env.FORMAT_PRESET || 'default'
module.exports = require(`./presets/${preset}`).linting;
