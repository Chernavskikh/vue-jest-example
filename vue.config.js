const path = require('path');

module.exports = {
    publicPath: '/vue-jest-example/',
    configureWebpack: {
        resolve: {
            alias: {
                "~": path.resolve(__dirname, 'src/')
            },
            extensions: [".js", ".vue", ".json"],
        },
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                  @import "~/assets/styles/main.scss";
                `,
            },
        },
    }
}
