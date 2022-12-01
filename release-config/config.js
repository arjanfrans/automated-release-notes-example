'use strict'

const config = require('conventional-changelog-conventionalcommits')
const fs = require('fs');
const preset = process.env.FORMAT_PRESET || 'default'
const mainTemplate = process.env.MAIN_TEMPLATE
const presetConfig = require(`./presets/${preset}`).config;

module.exports = (async () => {
    const initializedConfig = await config(presetConfig)

    if (presetConfig?.parserOpts) {
        initializedConfig.parserOpts = {
            ...initializedConfig.parserOpts,
            ...presetConfig.parserOpts
        }
    }

    if (mainTemplate && fs.existsSync(mainTemplate)) {
        const mainTemplateContent = fs.readFileSync(mainTemplate);

        initializedConfig.writerOpts = {
            ...initializedConfig.writerOpts,
            mainTemplate: mainTemplateContent.toString(),
        }
    }

    return initializedConfig;
})();
