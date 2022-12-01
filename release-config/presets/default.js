'use strict'

const baseConfig = require('@commitlint/config-conventional')
const types = require('../default-types')

module.exports = {
    linting: {
        ...baseConfig,
        rules: {
            ...baseConfig.rules,
            'type-enum': [
                2,
                'always',
                types.map(typeConfig => typeConfig.type)
            ],
        }
    },
    config: {
        types,
    }
}
