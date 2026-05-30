const path = require('node:path')

module.exports = {
    packagerConfig: {
        icon: path.join(__dirname, 'icon')
    },
    makers: [
        {
            name: '@electron-forge/maker-zip',
            config: {
                name: "on-top-siren-box",
                options: {
                    icon: path.join(__dirname, 'icon')
                }
            },
        },
    ],
};